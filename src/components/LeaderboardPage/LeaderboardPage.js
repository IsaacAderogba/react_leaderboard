import React from "react";
import Header from "../LoginPage/Header";
import Footer from "../LoginPage/Footer";
import Leaderboard from "./Leaderboard";

import ProgressChart from "./ProgressChart";
import styled from "styled-components";

class LeaderboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.amendedUserData = [];
    this.amendedConfigData = [];

    if ("data" in props.userData[0]) {
      // do nothing
    } else {
      this.configureData();
    }

    this.state = {
      appData:
        this.amendedUserData.length > 1 ? this.amendedUserData : props.userData,
      configData:
        this.amendedUserData.length > 1
          ? this.amendedConfigData
          : props.configData
    };

    console.log(this.state.appData)
  }

  configureData = () => {
    this.amendedUserData = this.props.userData.map(user => {
      return {
        ...user,
        labels: [],
        data: [],
        currentValue: 0,
        valueFlag: true,
        points: 0,
        progress: 0
      };
    });

    this.amendedConfigData = [
      ...this.amendedConfigData,
      { yAxisLabel: "Enter Label" },
      { successMetric: "UpTheChart" },
      { startFlag: false }
    ];
  };

  saveData = () => {
    localStorage.clear();
    let count = 0;

    this.state.appData.forEach(user => {
      localStorage.setItem(count, JSON.stringify(user));
      count++;
    });

    localStorage.setItem("config", JSON.stringify(this.state.configData));
  };

  onSubmitUpdate = (name, value) => {
    const newAppData = this.state.appData.map(user => {
      if (user.playerName === name) {
        let dateString = new Date().toString();
        let truncDate = dateString.substr(4, 6);

        if (user.valueFlag) {
          user.currentValue = parseFloat(value);
          user.data.push(user.currentValue);
          user.labels.push(truncDate);
          user.valueFlag = false;
        } else {
          user.currentValue = parseFloat(value);
          let amendedDataArray = [];
          let amendedLabelArray = [];
          for (let i = 0; i < user.data.length; i++) {
            if (i === user.data.length - 1) {
              let amendedValue = parseFloat(value);
              amendedDataArray.push(amendedValue);
              amendedLabelArray.push(truncDate);
            } else {
              amendedDataArray.push(user.data[i]);
              amendedLabelArray.push(user.labels[i]);
            }
          }
          user.data = amendedDataArray;
          user.labels = amendedLabelArray;
        }
      }
      console.log(user);
      return user;
    });

    this.setState({ appData: newAppData });
  };

  onCompleteRound = () => {
    let numToComplete = this.state.appData.length;
    let numCompleted = 0;

    this.state.appData.forEach(user => {
      if (user.valueFlag === false) {
        numCompleted = numCompleted + 1;
      }
    });

    if (numCompleted === numToComplete) {
      let newAppData = this.state.appData.map(user => {
        user.valueFlag = true;
        user.currentValue = 0;
        return user;
      });

      this.setState({ appData: newAppData });
    }
  };

  render() {
    this.saveData();

    return (
      <div>
        <Header />
        <StyledLeaderboardContainer>
          <Leaderboard onCompleteRound={this.onCompleteRound} />
        </StyledLeaderboardContainer>
        <StyledChartsContainer>
          {this.state.appData.map(user => {
            return (
              <ProgressChart
                onSubmitUpdate={this.onSubmitUpdate}
                key={user.playerName}
                userData={user}
                configData={this.state.configData}
              />
            );
          })}
        </StyledChartsContainer>
        <Footer />
      </div>
    );
  }
}

const StyledLeaderboardContainer = styled.div`
  display: flex;
  max-width: 1280px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

const StyledChartsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1280px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

export default LeaderboardPage;

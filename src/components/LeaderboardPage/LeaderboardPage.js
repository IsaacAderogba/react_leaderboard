import React from "react";
import Header from "../LoginPage/Header";
import Footer from "../LoginPage/Footer";
import Leaderboard from "./Leaderboard";
import InputForm from "./InputForm";
import DropdownForm from "./DropdownForm";
import PageLoader from "../Utility/PageLoader";

import ProgressChart from "./ProgressChart";
import styled from "styled-components";

class LeaderboardPage extends React.Component {
  constructor(props) {
    super(props);

    this.amendedUserData = [];
    this.amendedConfigData = [];

    this.state = {
      appData: [],
      configData: []
    };
  }

  componentDidMount() {
    if ("data" in this.props.userData[0]) {
      // do nothing
    } else {
      this.configureData();
    }

    this.setState(function() {
      return {
        appData:
          this.amendedUserData.length >= 1
            ? this.amendedUserData
            : this.props.userData,
        configData:
          this.amendedUserData.length >= 1
            ? this.amendedConfigData
            : this.props.configData
      };
    });

    console.log("App Data", this.state.appData);
  }

  configureData = () => {
    let count = 0;
    this.amendedUserData = this.props.userData.map(user => {
      count++;
      return {
        ...user,
        labels: [],
        data: [],
        currentValue: 0,
        progressRate: 0,
        valueFlag: true,
        points: 0,
        currentRank: count
      };
    });

    this.amendedConfigData = [
      ...this.amendedConfigData,
      { yAxisLabel: "Enter Label" },
      { successMetric: "Progress Up The Chart" },
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

  onLabelChange = label => {
    let newConfigData = this.state.configData.map(configPiece => {
      if ("yAxisLabel" in configPiece) {
        configPiece.yAxisLabel = label;
      }
      return configPiece;
    });

    this.setState({ configData: newConfigData });
  };

  onDropdownChange = value => {
    let newConfigData = this.state.configData.map(configPiece => {
      if ("successMetric" in configPiece) {
        configPiece.successMetric = value;
      }
      return configPiece;
    });

    this.setState({ configData: newConfigData });
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
    if (this.state.configData.length < 1) {
      return <PageLoader />;
    } else {
      this.saveData();
      return (
        <div>
          <Header />
          <StyledLeaderboardContainer>
            <InputForm
              configData={this.state.configData}
              onLabelChange={this.onLabelChange}
            />
            <Leaderboard onCompleteRound={this.onCompleteRound} />
            <DropdownForm
              configData={this.state.configData}
              onDropdownChange={this.onDropdownChange}
            />
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
}

const StyledLeaderboardContainer = styled.div`
  display: flex;
  max-width: 1280px;
  margin: 0 auto;
  justify-content: space-evenly;
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

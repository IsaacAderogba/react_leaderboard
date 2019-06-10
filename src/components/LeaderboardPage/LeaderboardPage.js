import React from "react";
import Header from "../LoginPage/Header";
import Footer from "../LoginPage/Footer";

import ProgressChart from "./ProgressChart";
import styled from "styled-components";

class LeaderboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.amendedUserData = [];
    this.amendedConfigData = [];

    if ("data" in props.userData[0]) {
      // do nothing
      console.log("Using local storage data");
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

    console.log(this.state.appData, this.state.configData);
  }

  configureData = () => {
    this.amendedUserData = this.props.userData.map(user => {
      console.log(user);
      return {
        ...user,
        labels: [],
        data: [],
        currentValue: 0,
        points: 0,
        progress: 0
      };
    });

    this.amendedConfigData = [
      ...this.amendedConfigData,
      { yAxisLabel: "Enter Label" },
      { successMetric: "UpTheChart" }
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

  render() {
    this.saveData();

    return (
      <div>
        <Header />
        <StyledChartsContainer>
          {this.state.appData.map(user => {
            return (
              <ProgressChart
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

const StyledChartsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1280px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

export default LeaderboardPage;

import React from "react";
import Header from "../Login/Header";
import Footer from "../Login/Footer";
import Leaderboard from "./Leaderboard";
import InputForm from "../Config/InputForms";
import DropdownForms from "../Config/DropdownForms";
import PageLoader from "../Utility/PageLoader";

import Chart from "../Chart/Chart";
import styled from "styled-components";

class LeaderboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.amendedUserData = [];
    this.amendedConfigData = [];
    this.state = {
      appData: [],
      configData: [],
      isSuccessMessage: null
    };
  }

  componentDidMount() {
    if ("data" in this.props.userData[0]) {
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
            : this.props.extConfigData
      };
    });
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
      { tournamentName: "Leaderboard" },
      { yAxisLabel: "Enter Y-Axis Label" },
      { successMetric: "HIGHER_SCORE" },
      { progressMetric: "ABSOLUTE_SCORE" },
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

  onTournamentChange = label => {
    let newConfigData = this.state.configData.map(configPiece => {
      if ("tournamentName" in configPiece) {
        configPiece.tournamentName = label;
      }
      return configPiece;
    });

    this.setState({ configData: newConfigData });
  };

  onSuccessDropdownChange = value => {
    let newConfigData = this.state.configData.map(configPiece => {
      if ("successMetric" in configPiece) {
        configPiece.successMetric = value;
      }
      return configPiece;
    });

    this.setState({ configData: newConfigData });
  };

  onProgressDropdownChange = value => {
    let newConfigData = this.state.configData.map(configPiece => {
      if ("progressMetric" in configPiece) {
        configPiece.progressMetric = value;
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
      return user;
    });

    let modifiedAppData = this.calculateProgress(newAppData, name, value);
    this.setState({ appData: modifiedAppData });
  };

  calculateProgress = (newAppData, name, value) => {
    let modifiedAppData = newAppData.map(user => {
      if (user.playerName === name) {
        if (user.data.length > 1) {
          console.log(user);
          let priorValue = user.data[user.data.length - 2];
          user.progressRate = value - priorValue;
        }
      }
      return user;
    });

    return modifiedAppData;
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
      let winnerName = this.designateWinner();

      let newAppData = this.state.appData.map(user => {
        if (user.playerName === winnerName) {
          user.points++;
        }
        user.valueFlag = true;
        user.currentValue = 0;
        user.progressRate = 0;
        return user;
      });

      let modifiedAppData = this.designateRank(newAppData);
      this.setState({ appData: modifiedAppData, isSuccessMessage: true });
      setTimeout(() => this.setState({ isSuccessMessage: null }), 3000);
    } else {
      this.setState({ isSuccessMessage: false });
      setTimeout(() => this.setState({ isSuccessMessage: null }), 3000);
    }
  };

  designateWinner = () => {
    let winnerName = "";
    let higherScore = -Infinity;
    let lowerScore = +Infinity;

    this.state.appData.forEach(user => {
      if (this.state.configData[2].successMetric === "HIGHER_SCORE") {
        if (this.state.configData[3].progressMetric === "ABSOLUTE_SCORE") {
          if (user.currentValue > higherScore) {
            higherScore = user.currentValue;
            winnerName = user.playerName;
          }
        } else if (
          this.state.configData[3].progressMetric === "RATE_OF_PROGRESS"
        ) {
          if (user.progressRate > higherScore) {
            higherScore = user.progressRate;
            winnerName = user.playerName;
          }
        }
      }

      if (this.state.configData[2].successMetric === "LOWER_SCORE") {
        if (this.state.configData[3].progressMetric === "ABSOLUTE_SCORE") {
          if (user.currentValue < lowerScore) {
            lowerScore = user.currentValue;
            winnerName = user.playerName;
          }
        } else if (
          this.state.configData[3].progressMetric === "RATE_OF_PROGRESS"
        ) {
          if (user.progressRate < lowerScore) {
            lowerScore = user.progressRate;
            winnerName = user.playerName;
          }
        }
      }
    });

    return winnerName;
  };

  designateRank = newAppData => {
    let duplicateData = [...newAppData];
    duplicateData.sort((a, b) => (a.points < b.points ? 1 : -1));

    let rank = 1;
    duplicateData.map(user => {
      user.currentRank = rank;
      rank++;
      return user;
    });

    newAppData.map(user => {
      for (let i = 0; i < newAppData.length; i++) {
        if (user.playerName === duplicateData[i].playerName) {
          user.currentRank = duplicateData[i].currentRank;
        }
      }
      return user;
    });

    return newAppData;
  };

  render() {
    if (this.state.configData.length < 1) {
      return <PageLoader />;
    } else {
      this.saveData();
      return (
        <div>
          <Header configData={this.state.configData} />
          <StyledContainer>
            <InputForm
              configData={this.state.configData}
              onLabelChange={this.onLabelChange}
              onTournamentChange={this.onTournamentChange}
            />
            <Leaderboard
              playerData={this.state.appData}
              onCompleteRound={this.onCompleteRound}
              isSuccessMessage={this.state.isSuccessMessage}
            />
            <DropdownForms
              configData={this.state.configData}
              onSuccessDropdownChange={this.onSuccessDropdownChange}
              onProgressDropdownChange={this.onProgressDropdownChange}
            />
            <StyledChartsContainer>
              {this.state.appData.map(user => {
                return (
                  <Chart
                    onSubmitUpdate={this.onSubmitUpdate}
                    key={user.playerName}
                    userData={user}
                    configData={this.state.configData}
                  />
                );
              })}
            </StyledChartsContainer>
          </StyledContainer>
          <Footer />
        </div>
      );
    }
  }
}

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1280px;
  margin: 24px auto 0 auto;
  justify-content: space-evenly;
  align-items: center;

  -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 2s; /* Firefox < 16 */
  -ms-animation: fadein 2s; /* Internet Explorer */
  -o-animation: fadein 2s; /* Opera < 12.1 */
  animation: fadein 2s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-moz-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-ms-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-o-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const StyledChartsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  max-width: 1280px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 900px) {
    width: 90%;
  }
`;

export default LeaderboardPage;

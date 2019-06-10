import React from "react";
import Header from "../LoginPage/Header";
import Footer from "../LoginPage/Footer";

import Chart from "./Chart";
import styled from "styled-components";

class LeaderboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.amendedData = [];

    if('data' in props.userData[0]) {
      // use existing data
    } else {
      this.configureData();
    }

    this.state = {
        appData: this.amendedData.length > 1 ? this.amendedData : props.userData,
        config: {
     
        }
    }

    console.log(this.state.appData)
  }

  configureData = () => {
    this.amendedData = this.props.userData.map(user => {
      console.log(user);
     return  {...user, labels: [], data: [], currentValue: 0, points: 0, progress: 0}
    });
  }

  render() {
    return (
      <div>
        <Header />
        <StyledChartsContainer>
          <Chart />
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

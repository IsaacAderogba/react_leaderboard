import React from "react";
import Header from "../LoginPage/Header";
import Footer from "../LoginPage/Footer";

import Chart from "./Chart";
import styled from "styled-components";

class LeaderboardPage extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);
  }

  render() {
    return (
      <div>
        <Header />
        <StyledChartsContainer>
          <Chart />
          <Chart />
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

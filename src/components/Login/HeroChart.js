import React from "react";
import styled from "styled-components";
import HeroImage from "./hero-image.png";

class HeroChart extends React.Component {
  render() {
    return (
      <StyledHeroChart>
        <img src={HeroImage} alt="Charts" />
      </StyledHeroChart>
    );
  }
}

const StyledHeroChart = styled.div`
  width: 50%;
  height: 80vh;
  padding: 0 2.5%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    min-width: 350px;
  }

  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

export default HeroChart;

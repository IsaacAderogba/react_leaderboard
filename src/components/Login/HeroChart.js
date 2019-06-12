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
  width: 40%;
  height: 80vh;
  padding: 0 2.5%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 80vh;
  }
`;

export default HeroChart;

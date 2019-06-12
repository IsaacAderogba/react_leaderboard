import React from "react";
import styled from "styled-components";

const PlayerDisplay = ({ player }) => {
  return (
    <StyledPlayerDisplay color={player.playerColor} rank={player.currentRank}>
      <div>{player.currentRank}</div>
      <span>{player.playerName}</span>
      <span>{player.currentValue} (score)</span>
      <span>{player.progressRate} (progress)</span>
      <span>{player.points}pts</span>
    </StyledPlayerDisplay>
  );
};

const StyledPlayerDisplay = styled.div`
  order: ${props => props.rank};
  display: flex;
  height: 40px;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  border: 1px solid #d4d4d4;
  border-radius: 2px;
  font-size: 16px;
  margin: 8px 0;
  color: #e4e6e8;

  div {
    height: inherit;
    background-color: ${props => props.color};
    flex-basis: 40px;
    color: #282c34;
    font-size: 32px;
    font-family: "Monoton", cursive;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #d4d4d4;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
  }

  span:nth-of-type(4) {
    margin-right: 8px;
    color: ${props => props.color};
  }

`;

export default PlayerDisplay;

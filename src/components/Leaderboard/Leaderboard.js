import React from "react";
import styled from "styled-components";

import PlayerDisplay from "./PlayerDisplay";

const Leaderboard = ({ onCompleteRound, playerData }) => {

  return (
    <StyledLeaderboard>
      {playerData.map(player => (
        <PlayerDisplay player={player} key={player.playerName} />
      ))}
      <button onClick={onCompleteRound}>Complete Round</button>
    </StyledLeaderboard>
  );
};

const StyledLeaderboard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;

  button {
    order: 100;
    margin-top: 16px;
    padding: 0.6em 1em;
    font-size: 16px;
    font-weight: 500;
    width: 60%;
    cursor: pointer;
    border-radius: 2px;
    border-color: #61dafb;
    background: #61dafb;
    color: #282c34;
  }

  @media only screen and (max-width: 900px) {
    width: 80%;
    order: 0;
  }
`;

export default Leaderboard;

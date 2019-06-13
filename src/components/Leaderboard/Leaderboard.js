import React, { useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

import PlayerDisplay from "./PlayerDisplay";

const Leaderboard = ({ onCompleteRound, playerData }) => {
  const [hovered, setHovered] = useState(false);

  const hoverEffect = useSpring({
    to: {
      transform: `scale(${hovered ? 1.02 : 1})`,
      color: hovered ? "white" : "#24272e"
    }
  });
  
  return (
    <StyledLeaderboard>
      {playerData.map(player => (
        <PlayerDisplay player={player} key={player.playerName} />
      ))}
      <animated.button
        style={hoverEffect}
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
        onClick={onCompleteRound}
      >
        Complete Round
      </animated.button>
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

   p {
     color: #F77076;
     margin-top: 16px;
     order: 101
   }

  @media only screen and (max-width: 900px) {
    width: 80%;
    order: 0;
  }
`;

export default Leaderboard;

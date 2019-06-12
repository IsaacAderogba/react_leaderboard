import React, { useState } from "react";
import styled from "styled-components";

const InputForm = ({ configData, onLabelChange, onTournamentChange }) => {
  const [tournamentName] = useState(configData[0].tournamentName);
  const [tournamentValue, setTournamentValue] = useState("");
  const [yAxisName] = useState(configData[1].yAxisLabel);
  const [yAxisValue, setYAxisValue] = useState("");

  const onAxisChange = input => {
    setYAxisValue(input.target.value);
    onLabelChange(input.target.value);
  };

  const onTournamentNameChange = input => {
    setTournamentValue(input.target.value);
    onTournamentChange(input.target.value);
  };

  return (
    <StyledInputForms>
      <p>Name your labels:</p>
      <input
        placeholder={tournamentName}
        value={tournamentValue}
        onChange={onTournamentNameChange}
      />
      <input
        placeholder={yAxisName}
        value={yAxisValue}
        onChange={onAxisChange}
      />
    </StyledInputForms>
  );
};

const StyledInputForms = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;

  p {
    color: #e4e6e8;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 8px;
  }

  input {
    height: 40px;
    background-color: transparent;
    border: 1px solid #d4d4d4;
    border-radius: 2px;
    padding-left: 16px;
    font-size: 16px;
    margin: 8px 0;
    color: #e4e6e8;
  }

  input::placeholder {
    color: #a0a0a0;
  }

  @media only screen and (max-width: 900px) {
    width: 80%;
    order: 4;
    margin-bottom: 24px;
  }
`;

export default InputForm;

import React, { useState } from "react";
import styled from "styled-components";

const UpdateChart = ({ onSubmitUpdate, userData }) => {
  const [inputValue, setInputValue] = useState("");
  const inputHandler = input => {
    setInputValue(input.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    onSubmitUpdate(userData.playerName, inputValue);
    setInputValue("");
  };

  return (
    <StyledForm color={userData.playerColor}>
      <p>
        Round score: {userData.currentValue} | Rate of progress:{" "}
        {userData.progressRate}
      </p>
      <input
        onChange={inputHandler}
        value={inputValue}
        placeholder="Enter this round's score..."
      />
      <button onClick={onSubmit}>Submit</button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 24px 12%;

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

  button {
    margin-top: 8px;
    padding: 0.5em 1em;
    font-size: 16px;
    font-weight: 500;
    width: 100%;
    cursor: pointer;
    border-radius: 2px;
    border-color: ${props => props.color};
    background: ${props => props.color};
    color: #282c34;
  }
`;

export default UpdateChart;

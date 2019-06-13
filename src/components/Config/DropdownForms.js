import React from "react";
import styled from "styled-components";

const DropdownForm = props => {
  const onChangeDropdownSuccess = input => {
    props.onSuccessDropdownChange(input.target.value);
  };

  const onChangeDropdownProgress = input => {
    props.onProgressDropdownChange(input.target.value);
  };

  const renderSuccessMetric = () => {
    if (props.configData[2].successMetric === "HIGHER_SCORE") {
      return (
        <select
          name="success-metric"
          onChange={onChangeDropdownSuccess}
          value="HIGHER_SCORE"
        >
          <option value="HIGHER_SCORE">Higher...</option>
          <option value="LOWER_SCORE">Lower...</option>
        </select>
      );
    } else {
      return (
        <select
          name="success-metric"
          onChange={onChangeDropdownSuccess}
          value="LOWER_SCORE"
        >
          <option value="HIGHER_SCORE">Higher...</option>
          <option value="LOWER_SCORE">Lower...</option>
        </select>
      );
    }
  };

  const renderProgressMetric = () => {
    if (props.configData[3].progressMetric === "ABSOLUTE_SCORE") {
      return (
        <select
          name="progress-metric"
          onChange={onChangeDropdownProgress}
          value="ABSOLUTE_SCORE"
        >
          <option value="ABSOLUTE_SCORE">...round score</option>
          <option value="RATE_OF_PROGRESS">...round rate of progress</option>
        </select>
      );
    } else {
      return (
        <select
          name="progress-metric"
          onChange={onChangeDropdownProgress}
          value="RATE_OF_PROGRESS"
        >
          <option value="ABSOLUTE_SCORE">...round score</option>
          <option value="RATE_OF_PROGRESS">...round rate of progress</option>
        </select>
      );
    }
  };

  return (
    <StyledDropdownForms>
      <p>How are points awarded?</p>
      {renderSuccessMetric()}
      {renderProgressMetric()}
    </StyledDropdownForms>
  );
};

const StyledDropdownForms = styled.div`
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  width: 25%;

  p {
    color: #e4e6e8;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 8px;
  }

  select {
    height: 40px;
    background-color: transparent;
    border: 1px solid #d4d4d4;
    padding-left: 16px;
    font-size: 16px;
    margin: 8px 0;
    color: #a0a0a0;
  }

  @media only screen and (max-width: 900px) {
    width: 80%;
    order: 5;
    margin-bottom: 24px;
  }
`;

export default DropdownForm;

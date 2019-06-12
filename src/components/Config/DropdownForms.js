import React from "react";

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
        <div>
          <select
            name="success-metric"
            onChange={onChangeDropdownSuccess}
            value="HIGHER_SCORE"
          >
            <option value="HIGHER_SCORE">Higher Score is Better ↑</option>
            <option value="LOWER_SCORE">Lower Score is Better ↓</option>
          </select>
        </div>
      );
    } else {
      return (
        <div>
          <select
            name="success-metric"
            onChange={onChangeDropdownSuccess}
            value="LOWER_SCORE"
          >
            <option value="HIGHER_SCORE">Higher Score is Better ↑</option>
            <option value="LOWER_SCORE">Lower Score is Better ↓</option>
          </select>
        </div>
      );
    }
  };

  const renderProgressMetric = () => {
    if (props.configData[3].progressMetric === "ABSOLUTE_SCORE") {
      return (
        <div>
          <select
            name="progress-metric"
            onChange={onChangeDropdownProgress}
            value="ABSOLUTE_SCORE"
          >
            <option value="ABSOLUTE_SCORE">Better Absolute Score</option>
            <option value="RATE_OF_PROGRESS">Better Rate of Progress</option>
          </select>
        </div>
      );
    } else {
      return (
        <div>
          <select
            name="progress-metric"
            onChange={onChangeDropdownProgress}
            value="RATE_OF_PROGRESS"
          >
            <option value="ABSOLUTE_SCORE">Better Absolute Score</option>
            <option value="RATE_OF_PROGRESS">Better Rate of Progress</option>
          </select>
        </div>
      );
    }
  };

  return (
    <div>
      <p>How are points awarded?</p>
      {renderSuccessMetric()}
      {renderProgressMetric()}
    </div>
  );
};

export default DropdownForm;

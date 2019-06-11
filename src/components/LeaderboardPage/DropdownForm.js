import React from "react";

class DropdownForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  onChangeDropdown = input => {
    this.props.onDropdownChange(input.target.value);
  };

  renderProgress = () => {
    if (this.props.configData[1].successMetric === "Progress Up The Chart") {
      return (
        <select
          name="success-metric"
          onChange={this.onChangeDropdown}
          value="Progress Up The Chart"
        >
          <option value="Progress Up The Chart">
            Progress Up The Chart ↑{" "}
          </option>
          <option value="Progress Down The Chart">
            Progress Down The Chart ↓
          </option>
        </select>
      );
    } else {
      return (
        <select
          name="success-metric"
          onChange={this.onChangeDropdown}
          value="Progress Down The Chart"
        >
          <option value="Progress Up The Chart">
            Progress Up The Chart ↑{" "}
          </option>
          <option value="Progress Down The Chart">
            Progress Down The Chart ↓
          </option>
        </select>
      );
    }
  };

  render() {
    return (
      <div>
        <p>Choose your success metric:</p>
        {this.renderProgress()}
      </div>
    );
  }
}

export default DropdownForm;

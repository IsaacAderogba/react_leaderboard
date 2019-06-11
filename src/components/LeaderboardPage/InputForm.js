import React from "react";

class InputForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      labelValue: "",
      placeholderValue: props.configData[0].yAxisLabel
    };
  }

  onChangeInput = input => {
    this.setState({ labelValue: input.target.value });
    this.props.onLabelChange(input.target.value);
  };

  render() {
    return (
      <div>
        <p>Name your y-axis label:</p>
        <input
          placeholder={this.state.placeholderValue}
          value={this.state.labelValue}
          onChange={this.onChangeInput}
        />
      </div>
    );
  }
}

export default InputForm;

import React from "react";

class UpdateChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ''
    };
  }

  inputHandler = input => {
    this.setState({
        inputValue: input.target.value,
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.onSubmitUpdate(this.props.userData.playerName, this.state.inputValue);
    this.setState({ inputValue: ''})
  }

  render() {
    return (
      <form>
        <p>Value: {this.props.userData.currentValue}</p>
        <input onChange={this.inputHandler} value={this.state.inputValue} placeholder="placeholder" />
        <button onClick={this.onSubmit}>Submit</button>
      </form>
    );
  }
}

export default UpdateChart;

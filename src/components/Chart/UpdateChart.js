import React from "react";
import styled from "styled-components";

class UpdateChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ""
    };
  }

  inputHandler = input => {
    this.setState({
      inputValue: input.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.onSubmitUpdate(
      this.props.userData.playerName,
      this.state.inputValue
    );
    this.setState({ inputValue: "" });
  };

  render() {
    return (
      <StyledForm color={this.props.userData.playerColor}>
        <p>Score: {this.props.userData.currentValue}</p>
        <input
          onChange={this.inputHandler}
          value={this.state.inputValue}
          placeholder="Enter this round's score..."
        />
        <button onClick={this.onSubmit}>Submit</button>
      </StyledForm>
    );
  }
}

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
    border: 1px solid #D4D4D4;
    border-radius: 2px;
    padding-left: 16px;
    font-size: 16px;
    margin: 8px 0;
    color: #e4e6e8;
  }

  input::placeholder {
    color: #e4e6e8;
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

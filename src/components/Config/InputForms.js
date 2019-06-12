import React from "react";
import styled from 'styled-components';

class InputForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tournamentName: props.configData[0].tournamentName,
      tournamentValue: "",
      yAxisName: props.configData[1].yAxisLabel,
      yAxisValue: ""
    };
  }

  onAxisChange = input => {
    this.setState({ yAxisValue: input.target.value });
    this.props.onLabelChange(input.target.value);
  };

  onTournamentChange = input => {
    this.setState({ tournamentValue: input.target.value });
    this.props.onTournamentChange(input.target.value);
  };

  render() {
    return (
      <StyledInputForms>
        <p>Name your labels:</p>
          <input
            placeholder={this.state.tournamentName}
            value={this.state.tournamentValue}
            onChange={this.onTournamentChange}
          />
        <input
          placeholder={this.state.yAxisName}
          value={this.state.yAxisValue}
          onChange={this.onAxisChange}
        />
      </StyledInputForms>
    );
  }
}

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
    border: 1px solid #D4D4D4;
    border-radius: 2px;
    padding-left: 16px;
    font-size: 16px;
    margin: 8px 0;
    color: #e4e6e8;
  }

  input::placeholder {
    color: #A0A0A0;
  }

  @media only screen and (max-width: 900px) {
    width: 80%;
    order: 4;
    margin-bottom: 24px;
  }
`

export default InputForm;

import React from "react";

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
      <div>
        <p>Name your labels:</p>
        <div>
          <input
            placeholder={this.state.tournamentName}
            value={this.state.tournamentValue}
            onChange={this.onTournamentChange}
          />
        </div>
        <input
          placeholder={this.state.yAxisName}
          value={this.state.yAxisValue}
          onChange={this.onAxisChange}
        />
      </div>
    );
  }
}

export default InputForm;

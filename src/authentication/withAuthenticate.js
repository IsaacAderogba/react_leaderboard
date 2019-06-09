import React from "react";
import LoginPage from "../components/LoginPage/LoginPage";
import uuid from 'uuid';

const formInputColors = ["#61DAFB", "#FFE44B", "#F77076", "#05FFD2"];

const withAuthenticate = App => {
  return class extends React.Component {
    constructor() {
      super();

      this.state = {
        isLoggedIn: false,
        formInputs: [
          { placeholder: "Player 1's name", color: formInputColors[0], formValue: '', id: uuid() },
          { placeholder: "Player 2's name", color: formInputColors[1], formValue: '', id: uuid() }
        ]
      };
    }

    addPlayer = () => {
      const placeholderName = `Player ${this.state.formInputs.length + 1}'s name`;
      const color = formInputColors[this.state.formInputs.length];
      const newPlayer = { placeholder: placeholderName, color: color, formValue: '', id: uuid() }

      this.setState({
          formInputs: [...this.state.formInputs, newPlayer]
      });
    };

    changeFormValue = (id, input) => {

        const newFormInputs = this.state.formInputs.map(form => {
            if(id === form.id) {
                form.formValue = input
            }
            return form;
        });

        this.setState({
            formInputs: newFormInputs
        })
    }

    render() {
      if (this.state.isLoggedIn) {
        return <App />;
      }
      return <LoginPage formInputs={this.state.formInputs} addPlayer={this.addPlayer} changeFormValue={this.changeFormValue} />;
    }
  };
};

export default withAuthenticate;

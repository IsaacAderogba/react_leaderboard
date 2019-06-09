import React from "react";
import InputForm from "./InputForm";
import styled from "styled-components";

class HeroForm extends React.Component {
  onClickAddPlayer = () => {
    this.props.addPlayer();
  };

  renderAddPlayer = () => {
    return this.props.formInputs.length < 4 ? (
      <p onClick={this.onClickAddPlayer}>Add another player</p>
    ) : null;
  };

  render() {
    const { formInputs } = this.props;
    console.log(formInputs);
    return (
      <div>
        <h1>Big Catchy Heading Goes Here</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
        <form>
          {formInputs.map(inputContent => {
            return <InputForm key={inputContent.id} inputContent={inputContent} changeFormValue={this.props.changeFormValue} />;
          })}
          {this.renderAddPlayer()}
          <button>Compete now</button>
        </form>
      </div>
    );
  }
}

export default HeroForm;

import React from "react";
import InputForm from "./InputForm";
import styled from "styled-components";

class HeroForm extends React.Component {
  onClickAddPlayer = () => {
    this.props.addPlayer();
  };

  renderAddPlayer = () => {
    return this.props.formInputs.length < 4 ? (
      <p className="right-aligned-hero-text" onClick={this.onClickAddPlayer}>
        Add another player
      </p>
    ) : null;
  };

  render() {
    const { formInputs } = this.props;
    return (
      <StyledHeroForm>
        <h1>Big Catchy Heading Goes Here</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
        <form onSubmit={this.props.onSubmitButton}>
          {formInputs.map(inputContent => {
            return (
              <InputForm
                key={inputContent.id}
                inputContent={inputContent}
                changeFormValue={this.props.changeFormValue}
              />
            );
          })}
          {this.renderAddPlayer()}
          <button>Compete now</button>
        </form>
      </StyledHeroForm>
    );
  }
}

const StyledHeroForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 0 2.5%;

  @media only screen and (max-width: 700px) {
    width: 90%;
    height: 80vh;
  }

  h1 {
    margin-top: 0;
    color: white;
    font-size: 48px;
    margin-bottom: 0;
  }

  p {
    color: #e4e6e8;
    font-size: 20px;
    font-weight: 500;
  }

  .right-aligned-hero-text {
    text-align: right;
    color: #61dafb;
    font-size: 16px;
    cursor: pointer;
  }

  button {
    margin-top: 16px;
    padding: 0.6em 1em;
    font-size: 20px;
    font-weight: 500;
    width: 100%;
    cursor: pointer;
    border-radius: 2px;
    border-color: #61dafb;
    background: #61dafb;
    color: #282c34;
  }
`;

export default HeroForm;

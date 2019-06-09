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
  width: 40%;
  padding: 0 5%;
  border: 1px solid red;

  @media only screen and (max-width: 700px) {
    width: 90%;
    height: 80vh;
  }

  h1 {
    color: white;
    font-size: 48px;
    margin-bottom: 0;
  }

  p {
      color: #E4E6E8;
      font-size: 20px;
      font-weight: 500;
  }
`;

export default HeroForm;

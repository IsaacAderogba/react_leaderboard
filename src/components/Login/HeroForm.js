import React, { useState } from "react";
import InputForm from "./InputForm";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const HeroForm = ({
  addPlayer,
  formInputs,
  onSubmitButton,
  changeFormValue
}) => {
  const [hovered, setHovered] = useState(false);
  const hoverEffect = useSpring({
    to: {
      transform: `scale(${hovered ? 1.01 : 1})`,
      color: hovered ? "white" : "#24272e"
    }
  });

  const onClickAddPlayer = () => {
    addPlayer();
  };

  const renderAddPlayer = () => {
    return formInputs.length < 4 ? (
      <p className="right-aligned-hero-text" onClick={onClickAddPlayer}>
        Add another player
      </p>
    ) : null;
  };

  return (
    <StyledHeroForm>
      <h1>Big Catchy Heading Goes Here</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor.
      </p>
      <form onSubmit={onSubmitButton}>
        {formInputs.map(inputContent => {
          return (
            <InputForm
              key={inputContent.id}
              inputContent={inputContent}
              changeFormValue={changeFormValue}
            />
          );
        })}
        {renderAddPlayer()}
        <animated.button
          style={hoverEffect}
          onMouseOver={() => setHovered(true)}
          onMouseOut={() => setHovered(false)}
        >
          Compete now
        </animated.button>
      </form>
    </StyledHeroForm>
  );
};

const StyledHeroForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  min-height: 80vh;

  padding: 0 2.5%;
  margin: 40px 0;

  @media only screen and (max-width: 900px) {
    width: 90%;
    justify-content: center;
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

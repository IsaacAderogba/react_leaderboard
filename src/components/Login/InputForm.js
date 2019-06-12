import React from "react";
import styled from "styled-components";

const InputForm = props => {
  const onChangeInput = input => {
    props.changeFormValue(props.inputContent.id, input.target.value);
  };

  const { placeholder, color, formValue } = props.inputContent;

  return (
    <StyledInputForm color={color}>
      <div className="Colour Box" />
      <input
        placeholder={placeholder}
        value={formValue}
        onChange={onChangeInput}
      />
    </StyledInputForm>
  );
};

const StyledInputForm = styled.div`
    display: flex;
    align-items: center;

    div {
        margin-right: 16px;
        width: 30px;
        height: 30px;
        border: 1px solid #eaeaea;
        background-color: ${props => props.color}
        border-radius: 4px;
    }

    input {
        flex: 1;
        height: 40px;
        background-color: transparent;
        border: 1px solid #eaeaea;
        border-radius: 2px;
        padding-left: 16px;
        font-size: 16px;
        margin: 8px 0;
        color: #E4E6E8;
    }

    input::placeholder {
        color: #A0A0A0;
    }
`;

export default InputForm;

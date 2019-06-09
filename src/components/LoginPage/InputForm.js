import React from "react";
import styled from "styled-components";

class InputForm extends React.Component {
  onChangeInput = input => {
    this.props.changeFormValue(this.props.inputContent.id, input.target.value);
  };

  render() {
    const { placeholder, color, formValue } = this.props.inputContent;

    return (
      <StyledInputForm color={color}>
        <div className="Colour Box" />
        <input
          placeholder={placeholder}
          value={formValue}
          onChange={this.onChangeInput}
        />
      </StyledInputForm>
    );
  }
}

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
    }

    input::placeholder {
        color: #E4E6E8;

    }
`;

export default InputForm;

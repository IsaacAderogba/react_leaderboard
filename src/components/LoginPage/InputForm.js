import React from "react";
import styled from "styled-components";

class InputForm extends React.Component {
    onChangeInput = (input) => {
        this.props.changeFormValue(this.props.inputContent.id, input.target.value);
    }

    render() {
        const { placeholder, color, formValue, id } = this.props.inputContent;

        return (
            <div className='input container'>
                <div className='Colour Box'>
                    <span>{color}</span>
                </div>
                <input placeholder={placeholder} value={formValue} onChange={this.onChangeInput}/>
            </div>
        );
    }
}

export default InputForm;
import React, { ChangeEvent } from "react";
import './Input.scss'

interface InputProperties {
    handleOnChange(event:ChangeEvent<HTMLInputElement>):void;
    labelText:string;
    value:string;
    type?:string;
}

const Input = ({handleOnChange, type = 'text', value, labelText}:InputProperties) => {



    return(
        <div className='input-component'>
            <label htmlFor="">{labelText}</label>
            <input value={value} onChange={e => handleOnChange(e)} type={type} />
        </div>
    );
} 

export default Input;
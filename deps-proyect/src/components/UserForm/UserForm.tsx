import React, { ChangeEvent, useState } from "react";
import Input from "../Input/Input";
import "./UserForm.scss";
import CONST from "../../constants";
import {toast} from 'react-toastify';
import axios from 'axios';

const head = {
    'user-id': 'AlejandroQF',
    'api-key': 'WDG8pB2MEQMgb2c8y1zLQdQ8bwoEfptCgozeuBU5TATOqjEg',
    'Authorization': 'Negotiate',
    'Access-Control-Allow-Origin': '*'
}

const UserForm = () => {
  const [user, setUser] = useState({
    email: "",
    username: "",
  });

  const handleOnSubmit = () => {};

  const handleOnChangeUser = (event: ChangeEvent<HTMLInputElement>) => {
    axios.post('https://neutrinoapi.net/bad-word-filter', {content: user.username}, {headers: head})
    .then((res) => {console.log(res);});
    setUser((user) => {
      return {
        ...user,
        username: event.target.value,
      };
    });
  };

  const handleOnChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    
    if(!user.email.match(CONST.REGEX.email)){        
        toast.warning('Write a valid email')
    }
    
    setUser((user) => {
      return {
        ...user,
        email: event.target.value,
      };
    });
  };

  return (
    <div className="user-form">
      <div className="title flex center">Register</div>
      <form onSubmit={handleOnSubmit} action="">
        <Input labelText={'Email'} value={user.email} handleOnChange={(e) => handleOnChangeEmail(e)} />
        <Input labelText={'User'} value={user.username} handleOnChange={(e) => handleOnChangeUser(e)} />
      </form>
    </div>
  );
};

export default UserForm;

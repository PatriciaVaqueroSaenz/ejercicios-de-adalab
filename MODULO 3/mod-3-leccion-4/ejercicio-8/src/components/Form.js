import React from "react";
import InputText from './InputText';
import '../stylesheet/App.css';

const handleFormInput = data => {
  console.log(data);
};

const Form = () => {
  return (
    <form>
      <InputText
        id="name"
        label='Escribe tu nombre:'
        name='name'
        handleInput={handleFormInput}
      />
      <InputText
        id="email"
        label='Escribe tu email:'
        name='email'
        handleInput={handleFormInput}
      />
      <InputText
        id="city"
        label='Escribe tu ciudad:'
        name='city'
        handleInput={handleFormInput}
      />
    </form>
  );
};

export default Form;
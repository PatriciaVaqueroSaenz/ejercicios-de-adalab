import React from "react";
import "../stylesheet/App.scss";

const Form = (props) => {
  
    const handleFormChange = (ev) => {
        
        const name = ev.target.name;
        const value = ev.target.value;
        
        props.handleChange(name, value);
    };

    return (
    <form className="form">
      <label htmlFor="name">Name:</label>
      <input onChange={handleFormChange} id="name" type="text" name='name'/>

      <label htmlFor="text">Text:</label>
      <textarea onChange={handleFormChange} id="text" name="description"></textarea>

      <select
        className="select"
        name="language"
        id="lang"
        onChange={handleFormChange}
      >
        <option name="language" value="Español">
          Español
        </option>
        <option name="language" value="Inglés">
          Inglés
        </option>
        <option name="language" value="Portugés">
          Portugués
        </option>
      </select>
    </form>
  );
};

export default Form;

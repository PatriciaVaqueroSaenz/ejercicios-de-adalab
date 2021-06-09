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

      <label htmlFor="all">Todos los públicos</label>
        <input
          onChange={handleFormChange}
          id="all"
          type="radio"
          value="all"
          name="age"
        />
        <label htmlFor="7">7</label>
        <input
          onChange={handleFormChange}
          id="7"
          type="radio"
          value="7"
          name="age"
        />
        <label htmlFor="12">12</label>
        <input
          onChange={handleFormChange}
          id="12"
          type="radio"
          value="12"
          name="age"
        />
        <label htmlFor="16">16</label>
        <input
          onChange={handleFormChange}
          id="16"
          type="radio"
          value="16"
          name="age"
        />
        <label htmlFor="18">18</label>
        <input
          onChange={handleFormChange}
          id="18"
          type="radio"
          value="18"
          name="age"
        />

        <label htmlFor="Comedia">Comedia</label>
        <input
          onChange={handleFormChange}
          id="Comedia"
          type="checkbox"
          value="Comedia"
          name="genre"
        />
        <label htmlFor="Drama">Drama</label>
        <input
          onChange={handleFormChange}
          id="Drama"
          type="checkbox"
          value="Drama"
          name="genre"
        />
        <label htmlFor="Fantasía">Fantasía</label>
        <input
          onChange={handleFormChange}
          id="Fantasía"
          type="checkbox"
          value="Fantasía"
          name="genre"
        />
        <label htmlFor="Acción">Acción</label>
        <input
          onChange={handleFormChange}
          id="Acción"
          type="checkbox"
          value="Acción"
          name="genre"
        />
        <label htmlFor="Familia">Familia</label>
        <input
          onChange={handleFormChange}
          id="Familia"
          type="checkbox"
          value="Familia"
          name="genre"
        />
         <label htmlFor="Terror">Terror</label>
        <input
          onChange={handleFormChange}
          id="Terror"
          type="checkbox"
          value="Terror"
          name="genre"
        />
    </form>
  );
};

export default Form;

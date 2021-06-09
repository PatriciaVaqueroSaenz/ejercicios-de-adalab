import React from "react";
import "../stylesheet/App.scss";

const Form = (props) => {
  
    //input
    const handleInput = (ev) => { 
        const inputName = ev.currentTarget.name;
        const inputValue = ev.currentTarget.value;
        
        props.handleInput(inputName, inputValue);
    };

    //description
    const handleDescription = (ev) => { 
      const inputName = ev.currentTarget.name;
      const inputValue = ev.currentTarget.value;
      
      props.handleDescription(inputName, inputValue);
    };

    //select
    const handleFormChange = (ev) => { 
      const inputName = ev.currentTarget.name;
      const inputValue = ev.currentTarget.value;
      
      props.handleFormChange(inputName, inputValue);
    };

    //checkbox
    const handleCheckbox = (ev) => { 
      const inputName = ev.currentTarget.name;
      const inputValue = ev.currentTarget.value;
      
      props.handleCheckbox(inputName, inputValue);
    };

  //radiobutton
    const handleRadio = (ev) => { 
      const inputName = ev.currentTarget.name;
      const inputValue = ev.currentTarget.value;
      
      props.handleRadio(inputName, inputValue);
    };


    return (
    <form className="form">
      
      <label htmlFor="name">Name:</label>
      <input 
      onChange={handleInput} 
      id="name" 
      type="text" 
      name='name'
      value={props.name}/>
{/* ---------------------------------------------------- */}
      <label htmlFor="description">Text:</label>
      <textarea  
      id="description" 
      name="description"
      onChange={handleDescription} 
      value={props.description}
      ></textarea>
{/* ---------------------------------------------------- */}
      <label>Idioma</label>
      <select
        className="select"
        name="language"
        onChange={handleFormChange}
        value={props.language}
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

{/* ---------------------------------------------------- */}

      <label htmlFor="all">Todos los públicos</label>
        <input
          onChange={handleRadio}
          id="all"
          type="radio"
          value="all"
          name="age"
        />
        <label htmlFor="7">7</label>
        <input
          onChange={handleRadio}
          id="7"
          type="radio"
          value="7"
          name="age"
        />
        <label htmlFor="12">12</label>
        <input
          onChange={handleRadio}
          id="12"
          type="radio"
          value="12"
          name="age"
        />
        <label htmlFor="16">16</label>
        <input
          onChange={handleRadio}
          id="16"
          type="radio"
          value="16"
          name="age"
        />
        <label htmlFor="18">18</label>
        <input
          onChange={handleRadio}
          id="18"
          type="radio"
          value="18"
          name="age"
        />
{/* ---------------------------------------------------- */}
        <label htmlFor="Comedia">Comedia</label>
        <input
          onChange={handleCheckbox}
          id="Comedia"
          type="checkbox"
          value="Comedia"
          name="genre"
        />
        <label htmlFor="Drama">Drama</label>
        <input
          onChange={handleCheckbox}
          id="Drama"
          type="checkbox"
          value="Drama"
          name="genre"
        />
        <label htmlFor="Fantasía">Fantasía</label>
        <input
          onChange={handleCheckbox}
          id="Fantasía"
          type="checkbox"
          value="Fantasía"
          name="genre"
        />
        <label htmlFor="Acción">Acción</label>
        <input
          onChange={handleCheckbox}
          id="Acción"
          type="checkbox"
          value="Acción"
          name="genre"
        />
        <label htmlFor="Familia">Familia</label>
        <input
          onChange={handleCheckbox}
          id="Familia"
          type="checkbox"
          value="Familia"
          name="genre"
        />
         <label htmlFor="Terror">Terror</label>
        <input
          onChange={handleCheckbox}
          id="Terror"
          type="checkbox"
          value="Terror"
          name="genre"
        />
    </form>
  );
};

export default Form;

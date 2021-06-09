import "../stylesheet/App.scss";
import Form from "./Form";
import Preview from "./Preview";
import React, { useState } from "react";


const App=()=> {

  const [name, setName] =useState('');
  const [language, setLanguage] =useState('');
  const [description, setDescription] =useState('');
  const [age, setAge]= useState('');
  const [genre, setGenre] =useState([]);

  //input
  const handleInput = (inputName,inputValue) => { 
    setName(inputValue);
  };

  //description
  const handleDescription = (inputName,inputValue) => { 
    setDescription(inputValue);
  };

  //select
  const handleFormChange = (inputName,inputValue) => { 
    setLanguage(inputValue);
  };

  //radio
  const handleRadio = (inputName,inputValue) => { 
    setAge(inputValue);
  };

  //checkbox
  const handleCheckbox = (inputName,inputValue) => { 
    setGenre(inputValue);
    if(genre.includes(inputValue)){
      const newGenre = genre.filter(genre=> genre!==inputValue);
      setGenre(newGenre);

    } else if(genre.length<3){
      const newGenre = [...genre, inputValue];
      setGenre(newGenre);
    }else{
      alert('Sólo puedes escoger tres géneros');
    }
  };

  return (
    <div className="content">
      <Form
        handleInput={handleInput}
        handleCheckbox={handleCheckbox}
        handleFormChange={handleFormChange}
        handleDescription={handleDescription}
        handleRadio={handleRadio}
      />
      <Preview
        name={name}
        description={description}
        language={language}
        age={age}
        genre={genre}
      />
    </div>
  );
}

export default App;

import React from "react";
import "../stylesheet/App.scss";

const Preview = (props) => {
  const { name, description, language} = props;
    return (
        <div className='card'>
        <h2 className='card-title'>{name}</h2>
        <p className='card-text'>{description}</p>
        <h4 className='card-lang'>{language}</h4>
      </div>
    );
};

export default Preview;
import React from "react";
import "../stylesheet/App.scss";

const Preview = (props) => {
    return (
        <div className='card'>
        <h2 className='card-title'>{props.name}</h2>
        <p className='card-text'>{props.description}</p>
        <h4 className='card-lang'>{props.language}</h4>
        <p className="card-lang">{props.age}</p>
        <p className="card-lang">{props.genre}</p>
      </div>
    );
};

export default Preview;
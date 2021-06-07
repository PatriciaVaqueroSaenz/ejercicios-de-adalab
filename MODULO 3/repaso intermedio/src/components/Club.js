import React from "react";
import '../stylesheet/App.scss';

const Club = (props) =>{
  
  const renderMembers = () =>{
    return props.item.members.map(
      (member, index) =>{
        return <li key={index}>{member}</li>
      }
    );
  };  
  
  
  return (
      <article>
        <i className={`club__icon ${props.item.fa}`}></i>
        <div className="club__info">
          <h2>{props.item.name}</h2>
          <h4>Members:</h4>
          <ul>{renderMembers()}</ul>
        </div>
      </article>
    );
  
};

export default Club;
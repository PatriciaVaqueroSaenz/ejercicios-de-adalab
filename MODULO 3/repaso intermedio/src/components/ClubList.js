import React from "react";
import Club from "./Club";
import '../stylesheet/App.scss';

const ClubList = (props) =>{
    
    const clubItems = props.list.map(
      (item, index)=>{
        return (
                <li key={index}>
                  <Club item={item}/>
                </li>
        );
    });
    return (
      <>
        <ul>{clubItems}</ul>
      </>
    );
  
}

export default ClubList;
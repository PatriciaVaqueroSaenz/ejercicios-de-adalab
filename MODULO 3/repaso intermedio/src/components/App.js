import React from "react";
import ClubList from "./ClubList";
import data from '../data/data.json';
import '../stylesheet/App.scss';


const App =()=> {
  
    return (
      <ClubList list ={data}/>
    );
}

export default App;

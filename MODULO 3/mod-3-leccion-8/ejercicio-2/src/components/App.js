import "../stylesheet/App.scss";
import React, { useState } from "react";


function App() {
  
  const [numbers, setNumbers] = useState([1, 4, 6, 8, 45, 89]);

  const handleChange=(ev)=> {
    
    if (ev.target.value) {
      return setNumbers(numbers.filter(number => number > parseInt(ev.target.value)));
    } else {
      return setNumbers(numbers);
    }
  } 

  const handleCheckBox=(ev)=> {
    
    if (ev.target.checked) {
      return setNumbers(numbers.filter(number => number % 2 === 0));
    } else {
      return setNumbers(numbers);
    }
  }

  return (
    <form>
      
      <label>Muestra los mayores que...</label> 
      <input 
      type="text" 
      onChange={handleChange}/><br/>

      <label>Muestra los pares...</label> 
      <input 
      type="checkbox" 
      onChange={handleCheckBox}/>
      
      <ul>
        {numbers.map((number, index) => 
          <li key={index}>{number}</li>)
        }
      </ul>
    
    </form>
  );

}

export default App;
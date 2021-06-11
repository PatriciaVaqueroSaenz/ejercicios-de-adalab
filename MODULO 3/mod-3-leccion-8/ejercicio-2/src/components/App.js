import "../stylesheet/App.scss";
import React, { useState } from "react";


function App() {
  
  const [numbers, setNumbers] = useState([1, 4, 6, 8, 45, 89]);

//----------------------------------------------------------

  //FILTRO A LOS MAYORES QUE EL NUMERO INTRODUCIDO 
  const handleChange=(ev)=> {
    //SI HE INTRODUCIDO UN VALOR-->FILTRO NUMBERS
    if (ev.target.value) {
      return setNumbers(numbers.filter(number => number > parseInt(ev.target.value)));
    //SI NO DEJO NUMBERS COMO ESTÁ
    } else {
      return setNumbers(numbers);
    }
  } 

//----------------------------------------------------------


  //FILTRO A LOS PARES SI ESTA CHECK
  const handleCheckBox=(ev)=> {
    
    if (ev.target.checked) {
      return setNumbers(numbers.filter(number => number % 2 === 0));
    } else {
      return setNumbers(numbers);
    }
  }

//----------------------------------------------------------


  //PINTA LA LISTA DE NUMEROS RESULTANTES DESPUES DE FILTRAR
  const numberList = numbers.map((number, index) => 
  <li key={index}>{number}</li>);

//----------------------------------------------------------


  return (
    
    <form>
      {/* FILTRO 1 */}
      <label>Muestra los mayores que...</label> 
      <input 
      type="text" 
      onChange={handleChange}/><br/>
      {/* FILTRO 2 */}
      <label>Muestra los pares...</label> 
      <input 
      type="checkbox" 
      onChange={handleCheckBox}/>
      
      {/* LISTA DE RESULTADOS DESPUÉS DE APLICAR FILTROS */}
      <ul>
        {numberList}
      </ul>
    
    </form>
  );

}

export default App;
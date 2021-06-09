import "../stylesheet/App.scss";
import React, { useState } from "react";


const App = () => {
  
  const [email, setEmail]= useState('');
  const [color, setColor]= useState('rojo');
  
  const handleEmail=ev=>{
    setEmail(ev.currentTarget.value);
  }
  const handleForm=ev=>{
    ev.preventDefault();
  }
  const handleReset=ev=>{
    setEmail('');
    setColor('rojo');
  }
  const handleColor=ev=>{
    setColor(ev.currentTarget.value);
  }
    return (
      <div>
        <form onSubmit={handleForm}>
          <label htmlFor="email">Name:</label>
          <input 
          onChange={handleEmail} 
          id="email" 
          type="text" 
          name='email' 
          value={email}/>
          <button onClick={handleReset}>Reset</button>
          
          <select name="" id="" onChange={handleColor} value={color}>
            <option value="verde">Verde</option>
            <option value="azul">Azul</option>
            <option value="rojo">Rojo</option>
          </select>
          
          <label htmlFor="">Verde</label>
          <input 
          type="radio"
          name='color'
          value='verde' 
          checked={color === 'verde'}
          onChange={handleColor}
          />


        <label htmlFor="">Azul</label>
          <input 
          type="radio"
          name='color'
          value='azul'
          checked={color === 'azul'}
          onChange={handleColor} 
          />


        <label htmlFor="">Rojo</label>
          <input 
          type="radio"
          name='color'
          value='rojo' 
          checked={color === 'rojo'}
          onChange={handleColor}
          />
        
        
        </form>
        <p>Tu email es: {email}</p>
        <p>Tu color es: {color}</p>

      </div>
    );
  
}

export default App;

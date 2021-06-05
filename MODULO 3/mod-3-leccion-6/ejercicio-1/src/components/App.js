import React, { useState } from 'react';
import '../stylesheet/App.scss';


const App =() => {
  
  const [number, setNumber] = useState(20);

  const handleClick = () => {
    setNumber(number+1);
  }

    return (
      <div className='content'>
        <p className='text'>Hoy tengo {number} años de edad</p>
        <button 
        onClick ={handleClick}
        className= 'button'>
          Hazme más viejo
        </button>
      </div>
    );
};

export default App;

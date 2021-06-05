import React, { useState } from 'react';
import '../stylesheet/App.scss';


const App =() => {
  
  const [age, setAge] = useState(20);
  const [present, setPresent] = useState(1);

  const handleClickAge = () => {
    setAge(age+1);
  }
  const handleClickPresent = () => {
    setPresent(present+1);
  }
    return (
      <div className='content'>
        <div className="age">
          <p className='text'>Hoy tengo {age} años de edad</p>
          <button
          onClick ={handleClickAge}
          className= 'button'>
            Hazme más viejo
          </button>
        </div>
        <div className="presents">
          <p className='text'>Tengo {present} regalos</p>
          <button
          onClick ={handleClickPresent}
          className= 'button'>
            Dame regalos
          </button>
        </div>
      </div>
    );
};

export default App;

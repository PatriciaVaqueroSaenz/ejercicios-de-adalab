import "../stylesheet/App.scss";
import React from "react";

function App() {
  const users = [
    { name: 'Nymphadora Tonks', time: 9 },
    { name: 'Cedric Diggory', time: 28 },
    { name: 'Cho Chang', time: 35 },
    { name: 'Luna Lovegood', time: 45 },
    { name: 'Gregory Goyle', time: 56 }
  ];
  
  const [
    {name: firstname, time: firsttime},
    {name: secondname, time: secondtime},
    {name: thirdname, time: thirdtime}
  ] = users;
  

  
  
    return (
      <>
      <p>El podium es: </p>
      <p>
        {`En primer lugar ${firstname} con un tiempo de ${firsttime}.`} 
      </p>
      <p> 
        {`En segundo lugar ${secondname} con un tiempo de ${secondtime}.`}
      </p>
      <p>
        {`En tercer lugar ${thirdname} con un tiempo de ${thirdtime}.`}
      </p>
      </>
    );
}

export default App;

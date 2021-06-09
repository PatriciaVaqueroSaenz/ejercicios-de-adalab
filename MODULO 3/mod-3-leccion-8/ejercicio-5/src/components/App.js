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
  
  const [first] = users;
  const [, second] = users;
  const [,, third] = users;

  
  
    return (
      <>
      <p>El podium es: </p>
      <p>
        {`En primer lugar ${first.name} con un tiempo de ${first.time}.`} 
      </p>
      <p> 
        {`En segundo lugar ${second.name} con un tiempo de ${second.time}.`}
      </p>
      <p>
        {`En tercer lugar ${third.name} con un tiempo de ${third.time}.`}
      </p>
      </>
    );
}

export default App;

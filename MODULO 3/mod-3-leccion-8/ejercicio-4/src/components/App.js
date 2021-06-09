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
  
  const [a, b, c] = users;
    return (
      <>
      <p>El podium es: </p>
      <p>{`En primer lugar ${a.name} con un tiempo de ${a.time}, en segundo lugar ${b.name} con un tiempo de ${b.time} y en tercer lugar ${c.name} con un tiempo de ${c.time}`}</p>
      </>
    );
}

export default App;

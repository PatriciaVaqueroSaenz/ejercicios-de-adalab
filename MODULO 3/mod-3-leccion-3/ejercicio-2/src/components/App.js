import React from 'react';
import HalfPage from './HalfPage';
import '../stylesheet/App.css';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <HalfPage className="half-page">
          <h1>Hola</h1>
          <p>Estoy a la izquierda</p>
        </HalfPage>
        <HalfPage className="half-page">
          <h2>Hola</h2>
          <p>Estoy a la derecha</p>
        </HalfPage>
      </div>
    )
  }
}

export default App;

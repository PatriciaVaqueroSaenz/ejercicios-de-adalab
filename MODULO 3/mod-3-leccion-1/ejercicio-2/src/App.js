/* eslint-disable no-unused-vars */
import React from "react";
import foto from "./foto.jpg";
import "./App.css";

// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Header = (
  <header className="App-header">
    <img src={foto} className="App-foto" alt="foto" />
    <div className="App-header-title">
      <h1 className="App-header-maintitle">Patricia Vaquero</h1>
      <h3 className="App-header-subtitle">Lunes 26 de junio de 2017</h3>
    </div>
  </header>
);
const Main = (
  <main className="App-main">
    <p className="App-main-paragraph">
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their
      default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
    </p>
  </main>
);

const Footer = (
  <footer className="App-footer">
     <p className="App-footer-paragraph">Leer más...</p>
        <div className="App-footer-container">
          <p className="App-footer-paragraph">37</p>
          <FontAwesomeIcon icon={faHeart} className="App-icon"/>
        </div>
  </footer>
);
const appRoot = (
  <div className="App">
      {Header}
      {Main}
      {Footer}
    </div>
);
function App() {
  return appRoot;
}

export default App;

import React from "react";
import foto from "../image/foto.jpg";
import "../components/App.js";
import "../stylesheet/App.css";

// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

class MediaCard extends React.Component {
    render() {
      return (
        <div className="App">
            <header className="App-header">
              <img src={foto} className="App-foto" alt="foto" />
              <div className="App-header-title">
                <h1 className="App-header-maintitle">{this.props.name}</h1>
                <h3 className="App-header-subtitle">{this.props.date}</h3>
              </div>
            </header>
            <main className="App-main">
              <p className="App-main-paragraph">
              {this.props.content}
              </p>
            </main>
            <footer className="App-footer">
              <p className="App-footer-paragraph">Leer más...</p>
                  <div className="App-footer-container">
                    <p className="App-footer-paragraph">37</p>
                    <FontAwesomeIcon icon={faHeart} className="App-icon"/>
                  </div>
            </footer>
        </div>
      );
    }
  }
  
export default MediaCard;
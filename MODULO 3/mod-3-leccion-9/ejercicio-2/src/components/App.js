import "../stylesheet/App.scss";
import React from "react";
import { Link, Route, Switch } from 'react-router-dom';
import Pricing from "./Pricing";
import About from "./About";
import Home from "./Home";


function App() {
    return (
      <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/pricing" component={Pricing} />
        </Switch>
      </main>
    </div>
    );
}

export default App;

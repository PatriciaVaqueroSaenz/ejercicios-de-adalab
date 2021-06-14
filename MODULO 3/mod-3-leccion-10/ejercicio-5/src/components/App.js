import "../stylesheet/App.scss";
import React from "react";
import LocalStorage from './Ls'


class App extends React.Component {
  
  render() {
    return (
      <div>
       <LocalStorage />
    </div>
    );
  }
}

export default App;

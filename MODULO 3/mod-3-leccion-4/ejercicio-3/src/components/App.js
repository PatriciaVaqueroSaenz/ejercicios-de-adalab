import React from "react";
import '../stylesheet/App.css';

class OnionHater extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleWrite = this.handleWrite.bind(this);
  }
  
  handleWrite(event) {
    if (event.target.value === "cebolla") {
      this.isOnion = true;
    } else {
      this.isOnion = false;
    }
    this.forceUpdate();
  }

  render() {
      if (this.isOnion === true) {
        return (
          <div className="container red">
            <textarea onChange={this.handleWrite}></textarea>
          </div>
        );
      } else {
        return (
          <div className="container">
            <textarea onChange={this.handleWrite}></textarea>
          </div>
        );
      }
    }
}

export default OnionHater;

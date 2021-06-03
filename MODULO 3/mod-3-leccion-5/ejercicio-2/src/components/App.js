import React from "react";
import '../stylesheet/App.scss';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      styling: 'boxBlue'
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState((prevState, props) => {
      let nextStyling;
      if (prevState.styling === 'boxBlue') {
        nextStyling = 'boxRed';
      } else {
        nextStyling = 'boxBlue';
      }

      return {
        styling: nextStyling
      };
    });
  }

  render() {
    return (
      <div className="content">
        <div 
        className={this.state.styling} 
        onClick={this.handleClick}
        >
        </div>
      </div>
    );
  }
}

export default App;

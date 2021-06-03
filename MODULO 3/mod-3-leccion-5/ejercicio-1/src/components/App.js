import React from "react";
import '../stylesheet/App.scss';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev){
    this.setState ({
      text: ev.target.value
    });
  }

  render() {
    return (
      <div className="content">
        <input type="text" onChange={this.handleChange} />
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default App;

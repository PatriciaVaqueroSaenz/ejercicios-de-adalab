import React from "react";
import MIMIMITranslator from './MIMIMITranslator';
import TextInput from './TextInput';
import '../stylesheet/App.css';


class App extends React.Component {
  
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: ''
    };
  }

  handleChange(param) {
    this.setState({
      value: param,
    });
  }
  
  render() {

    return (

      <div className="content">
        <h1>Traductor mimimi</h1>
        <TextInput handleChange={this.handleChange} value={this.state.value} />
        <MIMIMITranslator value={this.state.value} />
      </div>
    );
  }
}

export default App;

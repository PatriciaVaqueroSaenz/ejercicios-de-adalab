import "../stylesheet/App.scss";
import Form from "./Form";
import Preview from "./Preview";
import React from "react";


class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      language: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(input, value) {
    this.setState({[input]: value});
  }

  render() {
    return (
      <div className="content">
        <Form
          handleChange={this.handleChange}
        />
        <Preview
          name={this.state.name}
          description={this.state.description}
          language={this.state.language}
        />
      </div>
    );
  }
}

export default App;

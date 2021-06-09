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
    const { name, description, language} = this.state;
    return (
      <div className="content">
        <Form
          handleChange={this.handleChange}
        />
        <Preview
          name={name}
          description={description}
          language={language}
        />
      </div>
    );
  }
}

export default App;

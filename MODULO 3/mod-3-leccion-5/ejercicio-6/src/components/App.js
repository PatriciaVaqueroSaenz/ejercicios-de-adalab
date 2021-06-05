import React from "react";
import '../stylesheet/App.scss';
import Form from "./Form";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        firstName: 'Ada',
        lastName: 'Lovelace',
        birthDate: {
          day: 10,
          month: 'diciembre',
          year: 1815
        }
    };
  
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(indexKey, value){
    if (indexKey.includes("Name")) {
      this.setState({[indexKey] : value});
    } else {
      this.setState((prevState) => {
        return {
          birthDate: {
            ...prevState.birthDate,
            [indexKey]: parseInt(value),
          },
        };
      });
    }
  }


  render() {
    console.log('El estado es', this.state);
    return (
      <Form handleChange={this.handleChange}/>
    );
  }
}

export default App;

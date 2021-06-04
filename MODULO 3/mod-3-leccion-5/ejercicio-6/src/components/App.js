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
  
    this.handleChangeLifting = this.handleChangeLifting.bind(this);
  }

  handleChangeLifting(indexKey, value){
    if (indexKey.includes("Name")) {
      this.setState({
        [indexKey] : value
      });
    } else {
      this.setState((prevState) => {
        return {
          birthDate: {
            ...prevState.birthDate,
            [indexKey]: value,
          },
        };
      });
    }
  }


  render() {
    return (
      <Form handleChangeLifting={this.handleChangeLifting} state = {this.state}/>
    );
  }
}

export default App;

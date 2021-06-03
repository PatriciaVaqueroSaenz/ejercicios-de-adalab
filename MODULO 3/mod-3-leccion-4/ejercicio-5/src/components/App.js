import React from "react";
import CitySelector from './CitySelector';
import '../stylesheet/App.css';


class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.selectedCity = 'BuenosAires';
    this.handleChange = this.handleChange.bind(this);
  };
  
  handleChange(event){
    this.selectedCity= event.target.value;
    this.forceUpdate();
  }
  
  render() {

    return (
        <div className="content">
          <CitySelector 
          selectedCity={this.selectedCity} 
          handleChange={this.handleChange}/>
        </div>
    );
  }
}

export default App;

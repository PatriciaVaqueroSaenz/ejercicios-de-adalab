import React from "react";
import CitySelector from './CitySelector';
import '../stylesheet/App.css';


class Destiny extends React.Component {
  
  constructor(props) {
    super(props);
    this.myDestiny = '...';
    this.selectedCity = 'Boston';
    this.handleClick = this.handleClick.bind(this);
  };
  
  handleClick(event){
    this.selectedCity= event.target.value;
    this.forceUpdate();
  }
  
  render() {

    return (
        <div className="content">
          <CitySelector onChange={this.handleClick}/>
        </div>
    );
  }
}

export default Destiny;

import React from "react";
import CityImage from './CityImage';
import '../stylesheet/App.css';


class Destiny extends React.Component {
  
  constructor(props) {
    super(props);
    this.myDestiny = '...';
    this.onChangeListener = this.onChangeListener.bind(this);
  };

  onChangeListener(event) {
    this.myDestiny = event.target.value;
    this.forceUpdate();
  };
  
  render() {

    return (

        <div className="content">
          <select onChange={this.onChangeListener}>
            <option value="Buenos Aires">Buenos Aires</option>
            <option value="Sydney">Sydney</option>
            <option value="Praga">Praga</option>
            <option value="Boston">Boston</option>
            <option value="Tokio">Tokio</option>
          </select>

          <CityImage city={this.myDestiny}/>
        </div>
    );
  }
}

export default Destiny;

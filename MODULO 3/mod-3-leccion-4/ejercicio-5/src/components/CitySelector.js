import React from 'react';
import '../stylesheet/App.css';

class CitySelector extends React.Component {
  
  constructor(props){
    super(props);
    this.selectedCity = 'Boston';
    this.cities = {
      
        Boston: 'https://st2.depositphotos.com/2001403/5248/i/600/depositphotos_52487179-stock-photo-boston-harbor-and-financial-district.jpg',
        Praga: 'https://meraviglia.es/wp-content/uploads/2019/02/Cosas-a-tener-en-cuenta-en-Praga.jpg',
        Tokio: 'https://images.photowall.com/products/71333/mt-fuji-and-tokyo-skyline.jpg',
        Sydney: 'https://rccl-h.assetsadobe.com/is/image/content/dam/royal/data/ports/sydney-australia/overview/sydney-australia-opera-house.jpg?$750x320$',
        BuenosAires: 'https://pulsosocial.com/wp-content/uploads/2014/04/ba.jpg'
      
    };
  }

  
  render(){
    const city = this.selectedCity;
    const imageCity = this.cities[city];
  
    
    return (
      <>
      <select onChange={this.props.handleClick}>
            <option value="BuenosAires">Buenos Aires</option>
            <option value="Sydney">Sydney</option>
            <option value="Praga">Praga</option>
            <option value="Boston">Boston</option>
            <option value="Tokio">Tokio</option>
      </select>
      <p>Tu destino es viajar a {city}</p>
      <img className="image" src={imageCity} alt={city} />
      </>
    );
  }


}

export default CitySelector;
import React from 'react';

const Images = {
  Boston: 'https://st2.depositphotos.com/2001403/5248/i/600/depositphotos_52487179-stock-photo-boston-harbor-and-financial-district.jpg',
  Praga: 'https://meraviglia.es/wp-content/uploads/2019/02/Cosas-a-tener-en-cuenta-en-Praga.jpg',
  Tokyo: 'https://images.photowall.com/products/71333/mt-fuji-and-tokyo-skyline.jpg',
  Sydney: 'https://rccl-h.assetsadobe.com/is/image/content/dam/royal/data/ports/sydney-australia/overview/sydney-australia-opera-house.jpg?$750x320$',
  BuenosAires: 'https://pulsosocial.com/wp-content/uploads/2014/04/ba.jpg'
}

function CityImage(props) {
  return (
      <>
      <img className="destination-image" src={Images[props.city]} alt={props.city} />
      <p>Tu destino es viajar a {props.city}</p>
      </>
  );


}

export default CityImage;
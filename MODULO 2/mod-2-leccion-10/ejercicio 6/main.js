'use strict';

// Tenemos que pedir un listado de razas de perros, y con un número aleatorio elegir una raza del listado:

// pintar un mensaje que muestre la raza elegida al azar.
// pedir una imagen aleatoria de un perro de esa raza y pintarla.
const button = document.querySelector('.js-button');
function getDoggie() {
  fetch('https://dog.ceo/api/breeds/list/all')
    .then((breedResponse) => breedResponse.json())
    .then((breedsData) => {
      const breeds = Object.keys(breedsData.message);

      return fetch('https://api.rand.fun/number/integer?max=93')
        .then((randomNumber) => randomNumber.json())
        .then((breedNumber) => {
          const random = breedNumber.result;
          console.log(random);
          const dogBreed = breeds[random];
          const printName = document.querySelector('.js-breed');
          printName.innerHTML = dogBreed;

          return fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`)
            .then((picResponse) => picResponse.json())
            .then((imgData) => {
              const img = document.querySelector('img');
              img.src = imgData.message;
            });
        });
    });
}

button.addEventListener('click', getDoggie);
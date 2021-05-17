'use strict';

// En la web aparece una caja de texto donde escribimos el nombre de un personaje (o parte del nombre) y un botón, al hacer click, nuestra web muestra debajo un listado con los personajes que coinciden con la búsqueda indicando su nombre y género.

// coger info del botón y del input
const button = document.querySelector('.js-button');

function findCharacter() {
  const inputName = document.querySelector('.js-input').value;

  fetch(`https://swapi.dev/api/people/?search=${inputName}`)
    .then((searchResponse) => searchResponse.json())
    .then((searchData) => {
        //guardo los personajes obtenidos accediendo a results
      const characters = searchData.results;
        //guardaré esos personajes en una lista
      const characterList = document.querySelector('.js-characters');
      let content = '';

      for (let i = 0; i < characters.length; i++) {
        const name = characters[i].name;
        const gender = characters[i].gender;

        content += `<li>Character's name is ${name} and its gender is ${gender}</li>`;
      }
      //guardo los personajes coincidentes en la lista
      characterList.innerHTML = content;
    });
}

button.addEventListener('click', findCharacter);
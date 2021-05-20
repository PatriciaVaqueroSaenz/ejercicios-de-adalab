// la diferencia entre este código y el de la carpeta 2021 02 08 es:
// - el código se ha limpiado para hacerlo más pequeño

'use strict';

const filterInput = document.querySelector('.js-filter');
const formElement = document.querySelector('.js-form');

let palettes = [];
let favorites = [];

// api

function getDataFromApi() {
  fetch('https://beta.adalab.es/ejercicios-extra/js-ejercicio-de-paletas/data/palettes.json')
    .then(response => response.json())
    .then(data => {
      palettes = data.palettes;
      paintPalettes();
      setInLocalStorage();
    });
}

// local storage

function setInLocalStorage() {
  const stringPalettes = JSON.stringify(palettes);
  localStorage.setItem('palettes', stringPalettes);
}

function getFromLocalStorage() {
  const localStoragePalettes = localStorage.getItem('palettes');
  // siempre que cojo datos del local storage tengo que comprobar si son válidos
  // es decir si es la primera vez que entro en la página
  if (localStoragePalettes) {
    // sí tengo datos en el local storage porque localStoragePalettes es truthy, así lo parseo a un array y
    const arrayPalettes = JSON.parse(localStoragePalettes);
    // lo guardo en la variable global de palettes
    palettes = arrayPalettes;
    // cada vez que modifico los arrays de palettes o de favorites vuelvo a pintar y a escuchar eventos
    paintPalettes();
  } else {
    // no tengo datos en el local storage, así que llamo al API
    getDataFromApi();
  }
}

// filter

function handleFilter() {
  // si una función lo único que hace es llamar a otra, nos la podemos ahorrar
  // podríamos ejecutar directamente filterInput.addEventListener('keyup', paintPalettes);
  // pero así nos queda más legible
  paintPalettes();
}

filterInput.addEventListener('keyup', handleFilter);

// submit form

function handleForm(ev) {
  ev.preventDefault();
}

formElement.addEventListener('submit', handleForm);

// paint

function paintPalettes() {
  let htmlCode = '';
  for (const palette of palettes) {
    // obtengo las clases a pintar con ternarios
    let isValidClass = isValidPalette(palette) ? '' : 'palette--hidden';
    let isFavoriteClass = isFavoritePalette(palette) ? 'palette--favorite' : '';
    // creo todo el código html
    htmlCode += `<li class="palette js-palette ${isValidClass} ${isFavoriteClass}" id="${palette.id}">`;
    htmlCode += `<h2 class="palette__title">${palette.name}</h2>`;
    htmlCode += `<div class="palette__colors">`;
    for (const paletteColor of palette.colors) {
      htmlCode += `<div class="palette__color" style="background-color: #${paletteColor}"></div>`;
    }
    htmlCode += `</div>`;
    htmlCode += '</li>';
  }
  // añado el código html creado a la página
  document.querySelector('.js-palettes-container').innerHTML = htmlCode;
  // después de modificar el html escucho de nuevo los eventos
  listenPaletteEvents();
}

function isValidPalette(palette) {
  // includes me devuelve un booleano
  // así que devuelvo lo que devuelve includes
  return palette.name.toLowerCase().includes(filterInput.value.toLowerCase());
}

function isFavoritePalette(palette) {
  // compruebo si la paleta que recibo por parámetro está en los favoritos
  // find devuelve undefined o el elemento encontrado
  // si lo niego dos veces convierto de truthy a true y del falsy a false
  return !!favorites.find(favorite => favorite.id === palette.id);
}

// listen palette events

function listenPaletteEvents() {
  const paletteElements = document.querySelectorAll('.js-palette');
  for (const paletteElement of paletteElements) {
    paletteElement.addEventListener('click', handlePalette);
  }
}

// está función comprueba si la paleta clickada está dentro de favoritos
// - Si está lo debo sacar del array de favoritos
// - Si no está lo debo añadir al array de favoritos
function handlePalette(ev) {
  // obtengo el id de la paleta clickada
  const clickedPaletteId = ev.currentTarget.id;
  // busco si la paleta clickada está en el array de favoritos
  const favoritesFoundIndex = favorites.findIndex(favorite => favorite.id === clickedPaletteId);
  // si la paleta no está en favoritos findIndex me ha devuelto -1
  if (favoritesFoundIndex === -1) {
    // busco la paleta clickada en el array de paletas
    const paletteFound = palettes.find(palette => palette.id === clickedPaletteId);
    // para luego añadirlo al array de favoritos
    favorites.push(paletteFound);
  } else {
    // si el findIndex me ha devuelto un número mayor o igual a 0 es que sí está en el array de favoritos
    // quiero sacarlo de array de favoritos
    // para utilizar splice necesito el índice del elemento que quiero borrar
    // y quiero borrar un solo elemento
    favorites.splice(favoritesFoundIndex, 1);
  }
  // cada vez que modifico los arrays de palettes o de favorites vuelvo a pintar y a escuchar eventos
  paintPalettes();
}

// start app

getFromLocalStorage();

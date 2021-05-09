"use strict";

const button = document.querySelector(".button");

const getMovies = (event) => {
  event.preventDefault(); //para que no envíe el formulario
  const movies = [];
  const movie1 = document.querySelector(".movie1");
  const movie2 = document.querySelector(".movie2");
  movies[0] = movie1.value;
  movies[1] = movie2.value;
  for (const movie of movies) {
    console.log(`¡A mí también me encantó ${movie}! Tenemos mucho en común, humana.`);
  }
};

button.addEventListener("click", getMovies);
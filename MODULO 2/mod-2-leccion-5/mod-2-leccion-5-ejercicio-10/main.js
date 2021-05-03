'use strict';

//------------------------------------------------------
const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';
//------------------------------------------------------
const button = document.querySelector('.button');
const page = document.querySelector('html');
//------------------------------------------------------

function renderMovies() {
    page.innerHTML += `<ul>
    <li class="inception">${inception}</li>
    <li class="butterfly">${theButterFlyEffect}</li>
    <li class="eternal">${eternalSunshineOfTheSM}</li>
    <li class="blue">${blueVelvet}</li>
    <li class="split">${split}</li>
    </ul>`;

    const inceptionMovie = document.querySelector(".inception");
    const butterflyMovie = document.querySelector(".butterfly");
    const eternalMovie = document.querySelector(".eternal");
    const blueMovie = document.querySelector(".blue");
    const splitMovie = document.querySelector(".split");

    function handleClick(event) {
        console.log(event.currentTarget.innerHTML);
    }

    inceptionMovie.addEventListener('click', handleClick);
    butterflyMovie.addEventListener('click', handleClick);
    eternalMovie.addEventListener('click', handleClick);
    blueMovie.addEventListener('click', handleClick);
    splitMovie.addEventListener('click', handleClick);
}

button.addEventListener('click', renderMovies);
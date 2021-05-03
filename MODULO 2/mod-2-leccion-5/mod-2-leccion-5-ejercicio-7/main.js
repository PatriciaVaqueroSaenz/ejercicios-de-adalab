'use strict'

const button = document.querySelector('.js-button');

function changeButton(){
    button.classList.toggle('buttonVersion2');   
}

button.addEventListener('click', changeButton);
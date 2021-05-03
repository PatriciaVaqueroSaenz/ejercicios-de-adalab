'use strict'

const button1 = document.querySelector('.js-button1');
const button2 = document.querySelector('.js-button2');

function changeButton(event){
    const selectedButton = event.currentTarget;
    selectedButton.classList.toggle('buttonVersion2');   
}

button1.addEventListener('click', changeButton);
button2.addEventListener('click', changeButton);
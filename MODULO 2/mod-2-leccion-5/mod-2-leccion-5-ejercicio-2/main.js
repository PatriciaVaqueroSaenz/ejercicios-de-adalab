'use strict'

const button = document.querySelector('.button');


function sayHello (){
    let input = document.querySelector('.input').value;
    console.log('Hola ' + input);
}

button.addEventListener('click', sayHello);

const button = document.querySelector('.button');
const text = document.querySelector('.text');

function changeText(){
    text.innerHTML='Mi primer click, ¡ole yo y la mujer que me parió!';
}

button.addEventListener('click', changeText);
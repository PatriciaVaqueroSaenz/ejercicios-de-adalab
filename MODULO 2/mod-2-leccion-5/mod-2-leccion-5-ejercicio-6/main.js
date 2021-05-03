let text = document.querySelector('.text');
const input = document.querySelector('.input');

function writeText(event){
    let character = event.currentTarget.value;
    text.innerHTML= character;
}


input.addEventListener('keydown', writeText);
const nombre = 'Patricia';
const result = document.querySelector('.text');
const frase = `Hola ${nombre}, encantada de conocerte.`;
const htmlToShow = `<p> ${frase} </p>`;

result.innerHTML = htmlToShow;
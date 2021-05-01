const edad = document.querySelector('.age');
const age = parseInt(edad.innerHTML);
const diasAño = 365;
const horasDía = 24;

const horasVividas = age*diasAño*horasDía;

edad.innerHTML = ('Si tengo ' + edad.innerHTML + ' años, he vivido: ' + horasVividas + ' horas.');
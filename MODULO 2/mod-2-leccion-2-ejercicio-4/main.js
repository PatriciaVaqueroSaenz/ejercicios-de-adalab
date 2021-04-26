const precioCena = 128;
const personas = 9;
const precioChupito = 2;

const cenaPersona = (precioCena-precioChupito)/9;
const cenaAna= cenaPersona+ precioChupito;

console.log('Cada una paga: ' + cenaPersona + '€'+ ', menos Ana que paga: ' + cenaAna + '€');
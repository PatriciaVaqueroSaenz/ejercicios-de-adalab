'use strict'

function ave(a,b,c,d){
    return (a+b+c+d)/4;
}

let result= ave (2,3,3,4);
console.log(result);

// VARIACION EJERCICIO 2 MEDIA CON FUNCION FLECHA

const ave1 = (a,b,c,d) => {
    return (a+b+c+d)/4;
  };

console.log(ave1(2,3,3,4));

// VARIACION EJERCICIO 2 MEDIA CON FUNCION FLECHA SIN LLAVES NI RETURN

const ave2 = (a,b,c,d) => (a+b+c+d)/4;

console.log(ave2(2,3,3,4));

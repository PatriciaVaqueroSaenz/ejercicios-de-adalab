const users = [
    { name: 'María', isPremium: false, pin: 2389 },
    { name: 'Lucía', isPremium: true, pin: 2384 },
    { name: 'Susana', isPremium: true, pin: 2837 },
    { name: 'Rocío', isPremium: false, pin: 5232 },
    { name: 'Inmaculada', isPremium: false, pin: 8998 }
  ];

//encontrar el usuario que corresponde a ese PIN 5232, metodo find
const pinUser = users.find(user => user.pin === 5232);

console.log(pinUser);

//borrarlo del array de usuarios. Usar el método findIndex para encontrar su posición y bórralo usando splice.

const indexUser = users.findIndex(user => user.pin === 5232);
console.log(indexUser); //devuelve que es el que está en el índice 3

// con el splice lo quitamos (indice, nºelementos a quitar)
users.splice(3, 1);
console.log(users);

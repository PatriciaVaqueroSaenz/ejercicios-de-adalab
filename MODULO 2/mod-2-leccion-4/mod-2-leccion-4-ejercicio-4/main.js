'use strict'

function isEven (num){
    if (num%2 ===0){
        return 'El número introducido es par.'
    }else
        return 'El número introducido es impar.'
}

let result = isEven(25);
console.log(result);
'use strict'

function getEl(sel){
    return document.querySelector(sel);
}

function isEven (num){
    if (num%2 ===0){
        return 'El número introducido es par.'
    }else
        return 'El número introducido es impar.'
}

const result = getEl('.number');
console.log(result);

const resultEven = isEven (result.innerHTML);
console.log('Número: '+ result.innerHTML + '. ' + resultEven);
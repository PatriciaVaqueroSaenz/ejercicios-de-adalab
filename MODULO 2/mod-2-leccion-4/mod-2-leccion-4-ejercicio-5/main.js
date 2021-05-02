'use strict'

function getEl(sel){
    return document.querySelector(sel);
}

const text = getEl('.list');
console.log(text);
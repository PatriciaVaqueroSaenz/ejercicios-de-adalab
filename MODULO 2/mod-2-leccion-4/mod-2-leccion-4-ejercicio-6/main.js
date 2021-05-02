'use strict'

function getEl(sel){
    const selector = sel;
    if (document.querySelector(selector) === null){
        return 'No existe ningún elemento con clase, id o tag llamado ' + '{'+selector+'}'
    } else{
    return document.querySelector(sel);
    }
}

const text = getEl('#list');
console.log(text);
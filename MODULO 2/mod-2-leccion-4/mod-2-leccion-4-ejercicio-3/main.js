'use strict'

function IVA (price, iva){
    return 'El precio sin IVA es: '+ price+ ', el IVA es: '+ iva*price/100 + ' y el precio Total con IVA: '+ (price+ (iva*price/100));
}

let result = IVA(100,21);
console.log(result);
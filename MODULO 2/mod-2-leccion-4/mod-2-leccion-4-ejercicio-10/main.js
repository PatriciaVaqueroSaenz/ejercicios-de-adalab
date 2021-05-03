'use strict'

function boxSizing (borderBox,width,padding,border){
    
    if(borderBox === true){
        return 'El ancho del contenido es: '+ width + 'px y el ancho total de la caja es: ' + width + 'px.';
    }else{
        return 'El ancho del contenido es: '+ width + 'px y el ancho total de la caja es: ' + (width+padding*2+border*2) + 'px.';
    }    
}

let box = boxSizing(false, 30, 2, 4);
console.log(box);

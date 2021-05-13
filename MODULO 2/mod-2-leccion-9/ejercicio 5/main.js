'use strict'

let triangle='▲';

function paint(heigth){
    for(let i =0; i<heigth;i++){
        console.log(triangle.repeat(i+1));
    }
}

paint(5);
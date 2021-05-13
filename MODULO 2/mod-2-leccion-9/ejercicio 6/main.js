'use strict'

let triangle='▲';
let star = '★';
let tree = '|';

function paint(heigth){
    console.log(star);
    
    for(let i =0; i<heigth;i++){
        console.log(triangle.repeat(i+1));
    }

    console.log(tree);
    
}

paint(5);
'use strict'

const arr = [];
let num = 0;

function getReversed100Numbers(){
    for(let i=0;i<100;i++){
        arr.push(num+1);
        num++;
    }
    console.log(arr.reverse());
    
    for(let i=0;i<100;i++){
        console.log(arr[i]); 
    }
    
}


getReversed100Numbers();

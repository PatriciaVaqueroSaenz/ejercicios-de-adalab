'use strict'

const lostNumbers = [4, 8, 15, 16, 23, 42];
const arr = [];
const arr2 = [];




function bestLostNomber(){
    for (let i =0; i<lostNumbers.length;i++){
        if(lostNumbers[i]%2===0){
            arr.push(lostNumbers[i]);
        }
    }
    console.log(arr);
    
}


function bestLostNomberII(){
    for (let i =0; i<lostNumbers.length;i++){
        if(lostNumbers[i]%3===0){
            arr2.push(lostNumbers[i]);
        }
    }
    console.log(arr2);
}


bestLostNomber();
bestLostNomberII();
const result = arr.concat(arr2);
console.log(result);


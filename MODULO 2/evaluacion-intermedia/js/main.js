'use strict';

const button = document.querySelector('.js-button');
const faceSelect = document.querySelector('.js-select');
const faceElement  = document.querySelector('.js-face')

function refreshFace(){
    const selectedFace=faceSelect.value;
    if(selectedFace === 'happy'){
        faceElement.innerHTML = ':)';
    }else{
        faceElement.innerHTML = ':(';
    }
}

function generateRandomNumber(){

    const number = Math.round(Math.random() * 100);

    return number;
}

function refreshBackground(){

    const number = generateRandomNumber();
    
    removeBackgroundClass();
    
    setNewBackground(number);
}

function handleClickButton(){
    
    refreshFace();
    
    refreshBackground();
}


button.addEventListener('click',handleClickButton);
'use strict';

const button = document.querySelector('.js-button');
const faceSelect = document.querySelector('.js-select');
const faceElement  = document.querySelector('.js-face');
const mainElement = document.querySelector('.js-page')

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

function removeBackgroundClass(){

    mainElement.classList.remove('correctYellow','chileanOrange');
}

function setNewBackground(number){

    if(number%2===0){
        mainElement.classList.add('correctYellow');
    }else{
        mainElement.classList.add('chileanOrange');
    }
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
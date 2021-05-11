'use strict';

const button = document.querySelector('.js-button');
const faceSelect = document.querySelector('.js-select');
const faceElement  = document.querySelector('.js-face')

function handleClickButton(event){
    const selectedFace=faceSelect.value;
    if(selectedFace === 'happy'){
        faceElement.innerHTML = ':)';
    }else{
        faceElement.innerHTML = ':(';
    }
}



button.addEventListener('click',handleClickButton);
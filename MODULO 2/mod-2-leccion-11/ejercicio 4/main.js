'use strict';

const input = document.querySelector('.js-input');
const text = document.querySelector('.js-text');


function fillText(){
    let inputValue = input.value; 
    text.innerHTML= inputValue;
    localStorage.setItem('name',inputValue);

}

const savedName = localStorage.getItem('name');
if(savedName!==''){
    input.value = savedName;
    text.innerHTML = savedName;
}

input.addEventListener('keyup',fillText);
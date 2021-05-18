'use strict';

const inputName = document.querySelector('.js-inputName');
const inputLastName = document.querySelector('.js-inputLastName');
const text = document.querySelector('.js-text');


function fillText(){

  let inputNameValue = inputName.value;
  let inputLastNameValue = inputLastName.value;
  text.innerHTML= inputNameValue + ' ' + inputLastNameValue ;

  localStorage.setItem('name',inputNameValue);
  localStorage.setItem('lastName',inputLastNameValue);

}


const savedName = localStorage.getItem('name');
const savedLastName = localStorage.getItem('lastName');

if(savedName!=='' && savedLastName!=='' && savedName!==null && savedLastName!==null){
  inputName.value = savedName;
  inputLastName.value = savedLastName;
  text.innerHTML = savedName + ' ' + savedLastName;
}else{
  inputName.value = '';
  inputLastName.value = '';
  text.innerHTML = '';
}

inputName.addEventListener('keyup',fillText);
inputLastName.addEventListener('keyup',fillText);
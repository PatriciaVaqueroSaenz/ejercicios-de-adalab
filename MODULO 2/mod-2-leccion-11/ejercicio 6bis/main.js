/* eslint-disable no-trailing-spaces */
'use strict';

const inputName = document.querySelector('.js-inputName');
const inputLastName = document.querySelector('.js-inputLastName');
const text = document.querySelector('.js-text');
let objectName = {
  name: '',
  lastName:''
};

function fillText(){
 
  objectName.name = inputName.value;
  objectName.lastName = inputLastName.value ;
  
  text.innerHTML= objectName.name + ' ' + objectName.lastName;
  localStorage.setItem('completeName',JSON.stringify(objectName));
}

const savedName = JSON.parse(localStorage.getItem('completeName'));

if(savedName.name!=='' && savedName.lastName!==''){
  inputName.value=savedName.name;
  inputLastName.value = savedName.lastName;
  text.innerHTML= savedName.name + ' ' + savedName.lastName;
}else{
  inputName.value = '';
  inputLastName.value = '';
  text.innerHTML= '';
}


inputName.addEventListener('keyup',fillText);
inputLastName.addEventListener('keyup',fillText);
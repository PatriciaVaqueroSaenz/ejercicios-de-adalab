'use strict';

const form = document.querySelector('.js-form');
const content = document.querySelector('.content');

function theme(event){
  const checked = event.target.value;

  if(checked === '1'){
    content.classList.remove('js-dark');
    content.classList.add('js-light');
  }else{
    content.classList.remove('js-light');
    content.classList.add('js-dark');
  }

  localStorage.setItem('theme', checked);
}

let savedTheme = localStorage.getItem('theme');
if (savedTheme === '1'){
  content.classList.remove('js-dark');
  content.classList.add('js-light');
}else{
  content.classList.remove('js-light');
  content.classList.add('js-dark');
}

form.addEventListener('click', theme);



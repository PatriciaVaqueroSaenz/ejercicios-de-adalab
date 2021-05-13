'use strict'

const face = document.querySelector('.js-face');

function wink(){
    face.innerHTML = ';)';
}
function normalFace(){
    face.innerHTML = ':)';
}


face.addEventListener('click', wink);
face.addEventListener('mouseout',normalFace);
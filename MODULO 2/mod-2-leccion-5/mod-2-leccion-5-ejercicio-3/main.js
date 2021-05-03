'use strict'

const text = document.querySelector('.text');

function addText(){
    text.innerHTML += '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsum quo facere harum, facilis reiciendis ab. Natus, omnis necessitatibus! Quis quas incidunt hic consectetur illum commodi corrupti ipsa ratione assumenda.</p>' 
}

text.addEventListener('mouseover', addText);
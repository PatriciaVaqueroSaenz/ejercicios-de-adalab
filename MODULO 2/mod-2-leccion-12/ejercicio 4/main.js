'use strict';

const paragraphs  = document.querySelectorAll('.paragraph');

for (const par of paragraphs) {
    
    let elemHeight = par.offsetHeight;
    par.style.height = `${elemHeight/3}px`;
}

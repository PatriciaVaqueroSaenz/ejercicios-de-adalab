'use strict';

const form = document.querySelector('.form');
const img = document.createElement('img');
const imgDiv = document.querySelector('.imgDiv');


function showImg(e){
    
    const selectedCity = e.target.value;
    
    if(selectedCity === '1'){
        img.src = './images/Madrid.jpeg';
    
    }else if(selectedCity === '2'){
        img.src = './images/Paris.jpeg';
    
    }else{
        img.src = './images/NewYork.jpeg';
    }

    imgDiv.appendChild(img);
}


form.addEventListener('change',showImg);
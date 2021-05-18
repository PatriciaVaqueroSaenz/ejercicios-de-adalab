'use strict';

const links = document.querySelectorAll('.link');
const home = document.querySelector('.home');
const contactus = document.querySelector('.contactus');
const getready = document.querySelector('.getready');

function handlerPrevent(event){
    
    event.preventDefault();
    const section = event.target.dataset.id;
    
    if (section === 'home'){
        
        let pos1 = home.getBoundingClientRect();  
        window.scrollTo(pos1.x,pos1.y); 
        
    }else if (section === 'contactus'){
        let pos2 = contactus.getBoundingClientRect();
        window.scrollTo(pos2.x,pos2.y); 
    
    }else if (section === 'getready'){
        let pos3 = getready.getBoundingClientRect();
        window.scrollTo(pos3.x,pos3.y); 
    }
    
}

for (const link of links){
    link.addEventListener('click', handlerPrevent);
    
}

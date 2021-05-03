const text = document.querySelector('.text');

function scroll(){
    let scroll = window.scrollY;
    if (scroll>=250){
        text.classList.remove('scroll2');
        text.classList.add('scroll1');
    }else if (scroll<250){
        text.classList.remove('scroll1');
        text.classList.add('scroll2');
    }
}

window.addEventListener('scroll', scroll);
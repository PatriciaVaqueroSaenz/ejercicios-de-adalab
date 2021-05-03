const all = document.querySelector('html');

function changeBG(event){
    let key = event.key;
    if(key === 'r'){
        all.classList.remove('bg-purple');
        all.classList.add('bg-red');
    }else if (key=== 'm'){
        all.classList.remove('bg-red');
        all.classList.add('bg-purple');
    }
}

document.addEventListener('keydown',changeBG);
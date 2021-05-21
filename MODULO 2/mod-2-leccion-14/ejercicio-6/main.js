const time = document.querySelector('.time');
const stopCount = document.querySelector('.stop');
const goCount = document.querySelector('.go');

let counter = 0;
let temp;



function goCounter(){
    temp = setInterval(() => {
    counter++;
    const time = document.querySelector('.time');
    time.innerHTML = `${counter} segundos`;
    }
    , 1000);
}

function stopCounter(){
    clearInterval(temp);
}


stopCount.addEventListener('click',stopCounter);
goCount.addEventListener('click',goCounter);
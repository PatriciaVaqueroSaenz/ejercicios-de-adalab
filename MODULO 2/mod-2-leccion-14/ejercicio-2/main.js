let counter = 12;

const incrementAndShowCounter = () => {
    if(counter<13 && counter>0){
        counter--;
        const time = document.querySelector('.time');
        time.innerHTML = counter;
    }
};

setInterval(incrementAndShowCounter, 1000);
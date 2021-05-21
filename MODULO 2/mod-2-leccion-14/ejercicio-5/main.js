let counter = 12;
let temp;
const time = document.querySelector('.time');

const incrementAndShowCounter = () => {
    if(counter<13 && counter>0){
        counter--;
        time.innerHTML = counter;
    }else if (counter === 0) {
        time.innerHTML = 'FELIZ AÑO NUEVO';
        clearInterval(temp);
      }
};

temp= setInterval(incrementAndShowCounter, 1000);
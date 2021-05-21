let counter = 1;

const incrementAndShowCounter = () => {
  counter++;
  const time = document.querySelector('.time');
  if(counter<60){
    time.innerHTML = `Escrito hace ${counter} segundos`;
  }else if (counter=60){
    time.innerHTML = `Escrito hace 1 minuto`;
  }
};

setInterval(incrementAndShowCounter, 1000);
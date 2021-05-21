const msg = document.querySelector('.msg');
const restart = document.querySelector('.restart')
  

setTimeout(() => {
    msg.innerHTML = '¿te has dormido?';
}
, 10000);


function restartCounter(){
    msg.innerHTML = '';
  setTimeout(() => {
    msg.innerHTML = '¿te has dormido?';
  }
  , 10000);
}

restart.addEventListener('click',restartCounter);
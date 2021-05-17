'use strict';

function getNumber() {
  fetch('https://rand.fun/number/integer')
    .then((response) => response.json())
    .then((data) => {
      document.querySelector('.js-result').innerHTML = data.result;
    });
}
document.querySelector('.js-number').addEventListener('click', getNumber);
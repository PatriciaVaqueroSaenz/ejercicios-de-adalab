'use strict';


function getUser() {
  const username = document.querySelector('.js-user').value;

  fetch(`https://api.github.com/users/${username}`)
    .then((response) => response.json())
    .then((data) => {
      const img = document.querySelector('img');
      img.src = data.avatar_url;

      const repositories = document.querySelector('.js-info');
      repositories.innerHTML = `Este usuario ha publicado ${data.public_repos} repositorios.`;

      const name = document.querySelector('.js-name');
      name.innerHTML = data.name;
    });
}

const btn = document.querySelector('.js-btn-search');
btn.addEventListener('click', getUser);
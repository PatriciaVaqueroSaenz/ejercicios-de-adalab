'use strict';

function getOrg() {
  const orgName = document.querySelector('.js-org').value;

  fetch(`https://api.github.com/orgs/${orgName}`)
    .then((response) => response.json())
    .then((data) => {
      const orgName = document.querySelector('.js-name');
      orgName.innerHTML = data.name;
      return fetch('https://api.github.com/orgs/github/repos');
    })
    .then((responseRepos) => responseRepos.json())
    .then((repos) => {
      let orgRepos = document.querySelector('.js-info');
      let listContent = '';

      for (const repo of repos) {
        const repoName = `<li>${repo.name}</li>`;
        listContent += repoName;
      }
      orgRepos.innerHTML = listContent;
    });
}

const btn = document.querySelector('.js-btn-search');
btn.addEventListener('click', getOrg);
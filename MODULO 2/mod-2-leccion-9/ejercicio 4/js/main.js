const tasks = [
  { name: 'Recoger setas en el campo', completed: true },
  { name: 'Comprar pilas', completed: true },
  { name: 'Poner una lavadora de blancos', completed: true },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false
  }
];
for (const task of tasks) {
  const li = document.createElement('li');
  li.innerText = task.name;
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', changeState);
  li.appendChild(checkbox);
  if (task.completed) {
    li.classList.add('js-completed');
    checkbox.checked = true;
  }
  document.querySelector('.tasks').appendChild(li);
}
refreshNumbers();

function changeState(ev) {
  if (ev.target.checked) {
    ev.target.parentElement.classList.add('js-completed');
  } else {
    ev.target.parentElement.classList.remove('js-completed');
  }
  refreshNumbers();
}

function refreshNumbers() {
  const total = tasks.length;
  const completed = document.querySelectorAll('.js-completed').length;
  const left = total - completed;
  document.querySelector('.total').innerText = 'Total: ' + total;
  document.querySelector('.completed').innerText = 'Completadas: ' + completed;
  document.querySelector('.left').innerText = 'Restantes: ' + left;
}
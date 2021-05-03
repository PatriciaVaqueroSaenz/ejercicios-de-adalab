'use strict'

const teacherisra = document.querySelector('.teacher--isra');
const teachertuerto = document.querySelector('.teacher--tuerto');
const teachernasi = document.querySelector('.teacher--nasi');
// const favoriteIsra = teacherisra.querySelector('.favorite');
// const favoriteTuerto = teachertuerto.querySelector('.favorite');
// const favoriteNasi = teachernasi.querySelector('.favorite');

function selected (event){
    const teacherSelected = event.currentTarget;
    teacherSelected.classList.toggle('teacher--selected');
}
// function changeText(event){
//     const favorite = event.currentTarget;
//     favorite.innerHTML = 'Quitar';
// }


teacherisra.addEventListener('click', selected);
teachertuerto.addEventListener('click', selected);
teachernasi.addEventListener('click', selected);
// favoriteIsra.addEventListener('click', changeText);
// favoriteTuerto.addEventListener('click', changeText);
// favoriteNasi.addEventListener('click', changeText);

'use strict';


const form = document.querySelector('.form');
const users = [
    {
        nombre: 'Patricia',
        apellido: 'Vaquero',
        teléfono: '637235313'
    },
    {
        nombre: 'Aitor',
        apellido: 'Pastor',
        teléfono: '655921847'
    },
    {
        nombre: 'María',
        apellido: 'Sáenz',
        teléfono: '666812339'
    }
]
const nameInput = document.querySelector('.inputName');
const lastnameInput = document.querySelector('.inputLastName');
const phoneInput = document.querySelector('.inputPhone');


function fillForm(e){

    const selectedUser = e.target.value;

    if(selectedUser === '1'){
        nameInput.value = users[0].nombre;
        lastnameInput.value = users[0].apellido;
        phoneInput.value = users[0].teléfono;
        
    }else if(selectedUser === '2'){
        nameInput.value = users[1].nombre;
        lastnameInput.value = users[1].apellido;
        phoneInput.value = users[1].teléfono;

    }else if(selectedUser === '3'){
        nameInput.value = users[2].nombre;
        lastnameInput.value = users[2].apellido;
        phoneInput.value = users[2].teléfono;
    }

}


form.addEventListener('change', fillForm);
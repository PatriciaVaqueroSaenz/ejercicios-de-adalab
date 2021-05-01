'use strict';

// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.it/300x300';
// avatar que eligió el usuario al registrarse
let userAvatar = 'http://www.fillmurray.com/300/300';
//si descomentamos imageAvatar mostrará el valor de default_avatar
// userAvatar = ''; 

const imageAvatar = document.querySelector('.user__avatar');
imageAvatar.src = `${userAvatar || DEFAULT_AVATAR}`;

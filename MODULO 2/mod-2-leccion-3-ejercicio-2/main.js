const userName = 'Lorena';
const access = document.querySelector('.access');

if (userName === 'Patricia' || userName === 'Lorena'){
    access.innerHTML= "Bienvenida, " + userName + "."; 
}else {
    access.innerHTML= "Lo siento pero el usuario que has introducido no está registrado"; 
}

const button = document.querySelector('.js-button');


function handlerLog(event){
    console.log(event);
}


button.addEventListener('click', handlerLog);


//La propiedad type devuelve una cadena de texto que contiene el tipo de evento. Se establece cuando se contruye el evento y es el nombre que se utiliza normalmente para referirse al evento en cuestión, como click, load o error. En el ejemplo es type: "click"
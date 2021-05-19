const btn  = document.querySelector('.js-create-card');
const responseElement = document.querySelector('.js-response');

function handlerClickCreate(e){
    e.preventDefault();

    if(formData.name === ''){
        responseElement.innerHTML = 'Tienes que rellenar el campo nombre'
        responseElement.classList.remove('hidden');
    }else if (formData.job === ''){
        responseElement.innerHTML = 'Tienes que rellenar el campo puesto'
        responseElement.classList.remove('hidden');
        
    //(.....todos los demas campos.....)
    }else{

    fetch('https://awesome-profile-cards.herokuapp.com/card',{
        method:'POST',
        mode: 'cors',
        body: JSON.stringify(formData)
    })
    .then((response)=> response.JSON())
    .then((data) =>{
        if (data.success === false){
            responseElement.innerHTML = 'Tienes que rellenar los datos';
            responseElement.classList.remove('hidden');
        }else{
            responseElement.innerHTML=`<a href="${data.cardURL}"> Dirección de tu tarjeta`;
            responseElement.classList.remove('hidden');
        }

    })
    .catch(()=>{
        responseElement.innerHTML = 'Intentalo mas tarde';
        responseElement.classList.remove('hidden');
    })
}
}



btn.addEventListener('click',handlerClickCreate);
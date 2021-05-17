'use strict';

//pintar el listado de perros de todas las razas
//pintar una imagen de cada raza

const breedList = document.querySelector('.js-breedList');
const listBreed=[];

fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        for (const breed in data.message) {
            
            listBreed.push(breed);
            //console.log(listBreed); 
           //breedList.innerHTML += `<li> ${breed}</li>`;
           
           let url = `https://dog.ceo/api/breed/${breed}/images/random`;
           fetch (url)
            .then(result => result.json())
            .then((dataImage)=>{
                breedList.innerHTML += `<li>${breed}<img src='${dataImage.message}' class='image'/></li>`;
            })
        }
    })
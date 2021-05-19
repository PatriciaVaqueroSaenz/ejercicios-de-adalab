const blackboard = document.querySelector(".js-blackboard");

function write() {
  const sentence = "He aprendido bien cómo funcionan los bucles";

  for (let i = 0; i < 100; i++) {
    //ESCRIMOS EL MENSAJE 100 VECES

    const createParagraph = document.createElement("p");
    const addContent = document.createTextNode(sentence);

    createParagraph.appendChild(addContent);
    blackboard.appendChild(createParagraph);

    //------------------------------

    //CREAMOS 100 SELECT Y LOS AÑADIMOS A CADA FRASE

    let createSelect = document.createElement("select");
    createSelect.id = i;

    blackboard.appendChild(createSelect);

    //---------------------------------

    //AÑADIMOS LAS OPCIONES PARA CADA SELECT

    let colors = ["blanco", "azul", "rojo", "verde", "amarillo", "rosa"];

    for (let j = 0; j < colors.length; j++) {
      let createOption = document.createElement("option");

      createOption.value = colors[j];
      createOption.text = colors[j];
      createOption.id = j;
      createSelect.appendChild(createOption);
    }
    //--------------------------------------------

    //PONEMOS A LA ESCUCHA AL SELECT PARA QUE PUEDA CAMBIAR DE COLOR CUANDO CAMBIEMOS LA OPCION SELECCIONADA

    createSelect.addEventListener("change", changeColor);
  }
}

//FUNCION QUE CAMBIA DE COLOR LA FRASE EN FUNCION DE LA OPCION CLICKADA EN EL SELECT

function changeColor(event) {

  let select = event.currentTarget; // el select en el cual modificamos la opción con id igual a (0-99)
  let indexSelected = select.selectedIndex; //índice de la opción seleccionada en el select (0-5)
  let idSelect = event.currentTarget.id; //el id del select modificado
  
  const paragraph = document.querySelectorAll('p')[idSelect]; //selecciono el párrafo que ocupa la posición idSelect
  console.log(paragraph);

  //al párrafo seleccionado le añado el color clickado
  if (indexSelected === 0) 
    paragraph.style.color = "white";
  else if (indexSelected === 1) 
    paragraph.style.color = "blue";
  else if (indexSelected === 2) 
    paragraph.style.color = "red";
  else if (indexSelected === 3) 
    paragraph.style.color = "green";
  else if (indexSelected === 4) 
    paragraph.style.color = "yellow";
  else 
    paragraph.style.color = "pink";

}
write();

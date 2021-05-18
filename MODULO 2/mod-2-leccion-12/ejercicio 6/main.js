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
  let select = event.currentTarget;
  let indexSelected = select.selectedIndex;
  
}
write();

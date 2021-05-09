const adalabers = [
    {
      name: 'María',
      age: 29,
      job: 'diseñadora'
    },
    {
      name: 'Lucía',
      age: 31,
      job: 'ingeniera química'
    },
    {
        name: 'Susana',
        age: 34,
        job: 'periodista'
    },
    {
        name: 'Rocío',
        age: 25,
        job: 'actriz'
    },
    {
        name: 'Inmaculada',
        age: 21,
        job: 'diseñadora'
    }
  ];

function countAdalabers(adalabers){
    const total = adalabers.length;
    return `Hay un total de: ${total} adalabers`
}

function averageAge(adalabers){
    
    let suma = 0;
    let edad = [];

    for(let i=0;i<adalabers.length;i++){
        edad[i] = adalabers[i].age;
        suma += edad[i]; 
    }
    const ave = suma / adalabers.length;
    return `La media de edad es: ${ave} años.`
}

function theYoungest(adalabers){

    let youngest = 100;
    let name;

    for(let i=0;i<adalabers.length;i++){

        if (adalabers[i].age < youngest) {
            youngest = adalabers[i].age;
        } else {
            youngest = youngest;
        }
    }

    for (let i = 0; i<adalabers.length;i++){
       
        if (adalabers[i].age === youngest) {
            name = adalabers[i].name;
          }
    }

    return `La adalaber más joven es: ${name} que tiene ${youngest} años.`
}

function countDesigners(adalabers){
      
    let numDesigner = 0;

    for (let i = 0; i<adalabers.length;i++){
       
        if (adalabers[i].job === 'diseñadora') {
            numDesigner += 1;
          }
    }

    return `El número de diseñadoras es: ${numDesigner}.`
}


console.log(countAdalabers(adalabers));
console.log(averageAge(adalabers));
console.log(theYoungest(adalabers));
console.log(countDesigners(adalabers));
// "El dato VALOR está en la posición X y es de tipo TIPO".

const items = [
    'Ada',
    1815,
    ['Informática', 'Matemática', 'Escritora'],
    {
      mother: 'Anna Isabella',
      father: 'Lord Byron'
    }
];


    
    for(let i=0;i<items.length;i++){
        
       console.log( `El dato ${items[i]} está en la posición ${i+1} y es de tipo: ${typeof(items[i])}`);
    }


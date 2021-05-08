const adalaber1 = {};
adalaber1.name = 'Susana';
adalaber1.age = 34;
adalaber1.job = 'periodista';
adalaber1.run = run => 'Estoy corriendo';
adalaber1.runAMarathon = distance =>  `Estoy corriendo un maratón de ${distance}km.`;


console.log(`Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.job}.`);

console.log(adalaber1.run);

console.log(adalaber1.runAMarathon(50));
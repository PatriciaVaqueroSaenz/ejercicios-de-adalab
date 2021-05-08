const adalaber1 = {};
adalaber1.name = 'Susana';
adalaber1.age = 34;
adalaber1.job = 'periodista';
adalaber1.showBio = function(){
    return `Hola, me llamo ${this.name}, tengo ${this.age} años y soy ${this.job}.`;
};

console.log(adalaber1.showBio());

// console.log(`Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.job}.`);


const adalaber2 = {};
adalaber2.name = 'Rocío';
adalaber2.age = 25;
adalaber2.job = 'actriz';
adalaber2.showBio = function(){
    return `Hola, me llamo ${this.name}, tengo ${this.age} años y soy ${this.job}.`;
};

console.log(adalaber2.showBio());

// console.log(`Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.job}.`);
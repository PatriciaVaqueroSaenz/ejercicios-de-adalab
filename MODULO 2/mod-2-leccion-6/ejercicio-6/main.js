const cesta = {};
    cesta.name = 'Cesta de peras';
    cesta.minvalue = 2;
    cesta.currentValue = 5;
    cesta.initialValue = 5;
    cesta.add = function(num){
        cesta.currentValue+=num;
        return `Tienes ${cesta.currentValue} peras.`
    }
    cesta.sacar = function(num){
        cesta.currentValue-=num;
        return `Tienes ${cesta.currentValue} peras.`
    }
    cesta.reset = function(){
        cesta.currentValue=cesta.initialValue;
        return `Tienes ${cesta.currentValue} peras.`
    }

    console.log(cesta.add(2));
    console.log(cesta.sacar(3));
    console.log(cesta.reset());
    console.log(cesta.add(1));

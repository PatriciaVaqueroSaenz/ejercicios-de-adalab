const dogAge = 4;
let humanAge = 0;

if (dogAge === 1){
    humanAge=15;
    console.log('El perro tiene '+ dogAge+ ' año perruno que equivale a '+ humanAge+ ' años humanos.');
}else if (dogAge === 2){
    humanAge=24;
    console.log('El perro tiene '+ dogAge+ ' años perrunos que equivalen a '+ humanAge+ ' años humanos.');
}else if (dogAge >= 3){
    humanAge = 24 + (dogAge-2) * 5; 
    console.log('El perro tiene '+ dogAge+ ' años perrunos que equivalen a '+ humanAge+ ' años humanos.');
}
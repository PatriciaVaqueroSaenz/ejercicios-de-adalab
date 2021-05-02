let actualYear = 2021;

if (actualYear % 4 === 0){
    console.log('Este año es bisiesto. El siguiente año bisiesto será: '+ (actualYear+4));
}else if (actualYear % 4 === 1){
    console.log('El siguiente año bisiesto será: '+ (actualYear+3));
}else if (actualYear % 4 === 2){
    console.log('El siguiente año bisiesto será: '+ (actualYear+2));
}else if (actualYear % 4 === 3){
    console.log('El siguiente año bisiesto será: '+ (actualYear+1));
}
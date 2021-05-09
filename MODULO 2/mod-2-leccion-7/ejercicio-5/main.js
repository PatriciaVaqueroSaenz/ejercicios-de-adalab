let numbers = [2,5,6,4];



function average(numbers){
    
    let sum = 0;

    for (let i = 0; i<numbers.length;i++){
        sum += numbers[i];  
    }

    let ave = (sum/numbers.length);
    console.log('La media es '+ ave);

}

const result = average(numbers);
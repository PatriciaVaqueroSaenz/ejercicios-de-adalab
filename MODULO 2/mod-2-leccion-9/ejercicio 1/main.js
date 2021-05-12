const arr = [];
let num = 0;


function get100Numbers(){
    for(let i=0;i<100;i++){
        arr.push(num+1);
        console.log(arr[i]);
        num++;
    }
}

get100Numbers();
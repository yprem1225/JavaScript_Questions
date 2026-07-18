//default paramter 

function add(a , b=20){
    return a+b;
}

console.log(add(5));

//rest parameter

let arr = [19,44,55,6677,88]

function findMax(){
    return Math.max(...arr);
}

console.log(findMax());



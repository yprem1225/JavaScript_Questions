const increaseMarks = function(num){
    const np = num.map((num)=>{
        return num+10;
    });
    return np;

    
}

let num= [55,66,77,88]

console.log(increaseMarks(num));

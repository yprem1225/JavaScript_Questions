function filterEven(arr){
    const f = arr.filter((arr)=>{
          return arr % 2 == 0;
    })

    return f;
}

let num = [2,3,5,6,7,2,23,2,21]

console.log(filterEven(num));

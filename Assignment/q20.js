// create a named function filterEvenNumbers()

function filterEvenNumbers(arr){
    const f = arr.filter((arr)=>{
        return arr%2 ==  0;
    })

    return f
}

let num = [10,22,43,55,67,88,90,100]

console.log(filterEvenNumbers(num));

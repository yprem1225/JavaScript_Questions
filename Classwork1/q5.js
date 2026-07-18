//  Q. Demonstarte array methods: map, filter, reduce

let arr = [3,2,4,5,3,2,4,52,34,24,12]

const squareOfEachElement = arr.map((arr)=>{
    return arr * 2;
})

const onlyOdd = arr.filter((arr)=>{
    return arr% 2 != 0;
})

const sumOfArray = arr.reduce((arr,sum)=>{
     return sum+=arr;
})

console.log(squareOfEachElement);
console.log(onlyOdd);
console.log(sumOfArray);



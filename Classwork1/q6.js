//Q. Create a function find max that accepts an array of  numbers and returns the largest number in the array

function findMax(arr){
    let max = 0

    for(let i = 0 ; i<arr.length ; i++){
        if(arr[i]> max){
            max = arr[i]
        }
    }

    return max;
}

let num = [23,43,55,22]
console.log(findMax(num));

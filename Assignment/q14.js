//create a function findmax that returns the largest number in an array

function findMax(arr){
    let max = -1;

    for(let i = 0; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }

    return max;
}
let num =[88,22,44,21,3444]
console.log(findMax(num));

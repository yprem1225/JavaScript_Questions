function findTopper(marks){
    let max = 0;
    for(let i = 0 ; i<marks.length ; i++){
        if(marks[i]>= max){
            max = marks[i];
        }
    }

    return max;
}

let marks = [44,55,6,2,4,5,6,7,8,666]
console.log(findTopper(marks));

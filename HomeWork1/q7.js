const students = [
    {name : "prem", marks :1000},
    {name : "yash", marks :900},
    {name : "tt", marks :10}
];

function greaterMarks(students){
    const st = students.filter((students)=>{
        return students.marks>=80
    })

    return st;
}

console.log(greaterMarks(students));

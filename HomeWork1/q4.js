function PassedStudents(marks){
    const pass = marks.filter((marks)=>{
        return marks>=35;
    })

    return pass
}

let marks = [55,66,77,88,12,15,2,3,4]

console.log(PassedStudents(marks));

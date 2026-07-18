let marks = [22,33,88,99,990]

const marksToGrade = marks.map((marks)=>{
    if(marks>90){
        return "A";
    }else{
        return "B"
    }
})




console.log(marksToGrade);

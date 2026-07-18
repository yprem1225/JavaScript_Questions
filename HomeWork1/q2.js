const grade = (num)=>{
    if(num>=90){
        return "A";
    }else if(num>=80){
        return "B";
    }else{
        return "C"
    }
}

console.log(grade(55));

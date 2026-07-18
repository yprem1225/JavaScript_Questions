interface Attendance{
    markAttendance(isPresent:boolean):void
}

class Student implements Attendance{
    markAttendance(isPresent: boolean): void {
        if(isPresent){
            console.log("Student is Present");
            
        }else{
            console.log("Absent");
        }
    }
}

const s = new Student();
s.markAttendance(false);
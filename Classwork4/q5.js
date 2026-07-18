"use strict";
class Student {
    markAttendance(isPresent) {
        if (isPresent) {
            console.log("Student is Present");
        }
        else {
            console.log("Absent");
        }
    }
}
const s = new Student();
s.markAttendance(true);

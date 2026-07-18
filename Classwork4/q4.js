"use strict";
// example of abstract class
class Person {
}
class Student extends Person {
    name = "Prem";
    getDetail() {
        console.log(this.name);
    }
    getRole() {
        return "Student";
    }
}
const s = new Student();
s.getDetail();
console.log(s.getRole());

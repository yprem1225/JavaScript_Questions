"use strict";
class Student {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class School {
    static totalStudents = 0;
    studentList = [];
    addStudent(student) {
        this.studentList.push(student);
        School.totalStudents++;
    }
    static totalCount() {
        return School.totalStudents;
    }
}
const s = new Student(1, "prem");
const sc = new School();
sc.addStudent(s);
console.log(School.totalCount());

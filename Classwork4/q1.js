"use strict";
class Student {
    id;
    name;
    grade;
    address;
    constructor(id, name, grade, address) {
        this.id = id;
        this.name = name;
        this.grade = grade;
        this.address = address;
    }
    displayInfo() {
        console.log("id" + this.id
            + "name:" + this.name
            + " grade:" + this.grade
            + "address" + this.address);
    }
}
const p = new Student(1, "prem", "A", "Mumbai");
console.log(p);
p.displayInfo();

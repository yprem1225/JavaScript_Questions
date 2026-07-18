"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
}
class Student extends Person {
    name = "Prem";
    getDetails() {
        console.log(this.name);
    }
    getRole() {
        return "Students";
    }
}
const s = new Student();
s.getDetails();
console.log(s.getRole());
//# sourceMappingURL=q4.js.map
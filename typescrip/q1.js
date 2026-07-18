"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Students {
    id;
    name;
    salary;
    address;
    constructor(id, name, salary, address) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.address = address;
    }
    displayInfo() {
        console.log("id: " + this.id
            + "name: " + this.name
            + " salary: " + this.salary
            + "address: " + this.address);
    }
}
const p = new Students(1, "Prem", 1000, "yash");
p.displayInfo();
//# sourceMappingURL=q1.js.map
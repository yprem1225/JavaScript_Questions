abstract class Person{
    abstract getDetails():void
    abstract getRole():String
}

class Student extends Person{
    name:String = "Prem";
    getDetails(): void {
        console.log(this.name);
        
    }

    getRole(): String {
        return "Students"
    }
}

const s = new Student()
s.getDetails();
console.log(s.getRole());

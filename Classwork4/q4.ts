// example of abstract class
abstract class Person{
    abstract getDetail():void
    abstract getRole():String;

}

class Student extends Person{
    name:String = "Prem";

    getDetail(): void {
        console.log(this.name);
        
    }

    getRole(): String {
        return "Student"
    }
}

const s = new Student();
s.getDetail();
console.log(s.getRole());

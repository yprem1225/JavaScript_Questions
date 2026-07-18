class Student{
    id:Number;
    name:String;

    constructor(    id:Number,name:String) {
        this.id = id;
        this.name = name;
    }
}

class School{
    static totalStudents: any = 0;
    studentList: Student[] =  [];

    addStudent(student : Student):void{
        this.studentList.push(student);
        School.totalStudents++;
    }

    static totalCount(): Number{
        return School.totalStudents;
    }
}

const s = new Student(1,"prem");

const sc = new School();

sc.addStudent(s);

console.log(School.totalCount());



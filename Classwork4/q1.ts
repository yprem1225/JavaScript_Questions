class Student{
    id: Number;
    name:String;
    grade:String;
    address:String;

    constructor( id: Number,name:String,grade:String,address:String){
        this.id = id;
        this.name = name;
        this.grade = grade;
        this. address = address;
    }


    displayInfo():void{
        console.log("id: "+this.id 
            + "name: " +this.name
            + " grade: " +this.grade
            + "address: "+this.address
        );
        
    }

}

const p = new Student(1,"prem", "A","Mumbai");
console.log(p);
p.displayInfo();




class Students{
    id:Number;
    name: String;
    salary: Number;
    address : String

    constructor(id:Number,name: String,salary: Number, address : String){
        this.id = id
        this.name = name
        this.salary = salary
        this.address = address
    }

    displayInfo():void{
        console.log("id: "+this.id 
            + "name: " +this.name
            + " salary: " +this.salary
            + "address: "+this.address
        );
    }
}

const p = new Students(1,"Prem",1000,"yash")
p.displayInfo()
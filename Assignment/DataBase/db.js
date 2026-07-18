const mysql = require('mysql2');

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"prem@1208",
    database:"k1"
})
// to establish connection
function connectDB(){
    db.connect((err)=>{
        if(err){
            console.log(err);
            
        }else{
            console.log("connect");
            
        }
    })
}

// insert data
function insertEmp(name,salary){
    const user = {name,salary};
    db.query("insert into emp set ?",user,(err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("Inserted")
        }
    })
}

// update data
function updateData(name,id){
    db.query("update Emp set name = ? where id =?",[name, id],(err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("Updated");
            
        }
    })
}
//display data
function displayEmp(){
    db.query("select * from emp",(err,result)=>{
        if(err){
            console.log(err);
        }else{
            console.log(result);
            
            
        }
    })
}

// insertEmp("prem","1000")
updateData("hello",1)
displayEmp()

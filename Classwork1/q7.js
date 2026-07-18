const Employee =[
    {name : "Prem", amt :1999},
    { name: "yash", amt :9}
]


const moreThen100 = Employee.filter((emp)=>{
    return emp.amt >=100;
})
console.log(moreThen100);

const arr =[
    {name : "Prem", amt :1999},
    { name: "yash", amt :9}
]


const totalSales = arr.reduce((sum,arr)=>{
    return sum+=arr.amt
},0)


console.log(totalSales);

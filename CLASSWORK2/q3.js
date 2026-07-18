// Q. Demonstarte and example of promise

// function pass(marks){
//     return new Promise((resolve, reject) => {
//         if(marks>=40){
//             resolve("Passed");
//         }else{
//             reject("Failed")
//         }
//     });
// }

// pass(5).then((result)=>{
//     console.log(result);
    
// }) .catch((err)=>{
//     console.log(err);
    
// })

function pass(marks){
    return new Promise((resolve, reject)=>{
        if(marks>=35){
            resolve("Passed");
        }else{
            reject("Failed");
        }
    })
}
pass(5).then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(err);
    
})

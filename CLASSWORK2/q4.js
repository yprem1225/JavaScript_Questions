function pass(marks){
    return new Promise((resolve, reject) => {
        if(marks>=35){
            resolve("You are passed")
        }else{
            reject("Soryy! You didnot appeared for exam hence you failed")
        }
    });
}


async function test() {

    try{
        const data = await pass()
        if(data){
            console.log(data);
        
        }
    }
    catch(error){
        console.log(error);
        
    }
    
}

test()
// user defined exception

// class InvalidAge extends Error{
//     constructor(message){
//         super(message)
//         this.name="Invalid Age: ";
//     }
// }

// function Valid(age){
//     if(age<18){
//         try{
//             throw new InvalidAge("Age<18")
//         }catch(err){
//             console.log(err.name+""+err.message);
//         }
//     }else{
//         console.log("Valid Age");
        
//     }
// }

// Valid(4)

class InvalidAge extends Error{
    constructor(message){
        super(message)
        this.name = "Invalid Age";
    }
}

function validity(age){
    if(age<18){
        try{
            throw new InvalidAge("Age<18")
        }catch(err){
            console.log(err.name+" "+err.message);
            
        }
    }else{
        console.log("Valid age");
        
    }
}

validity(6)
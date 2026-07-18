function payment(amt, bal){
    try{
        if(amt>bal){
        throw new Error (" Less balance");

        console.log("Payment Successful.");
        console.log("Amount Paid: ₹" + amount)
        }
    }catch(err){
        console.log(err.name+" "+err.message);
        
    }
    
}

function checkout(amount, balance) {

    try {

        if (balance < amount) {
            throw new Error("Payment Failed! Insufficient Balance.");
        }

        console.log("Payment Successful.");
        console.log("Amount Paid: ₹" + amount);

    } catch (err) {

        console.log(err.message);

    }

}

checkout();
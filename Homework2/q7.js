function checkStock(productName, stock) {

    if (stock === 0) {
        throw new Error(productName + " is Out of Stock.");
    }

    console.log(productName + " is available.");
}

function addToCart(productName,stock){
    try{
        checkStock(productName,stock)
    }catch(err){
        console.log(err.name+" "+err.message);
        
    }
}

addToCart("phone", 0)
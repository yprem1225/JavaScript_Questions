const product = {
            name: "iPhone 16",
            price: 79999,
            availability: "In Stock"
        };

function fetchProduct(product){
    return new Promise((resolve , reject)=>{
       if(product.availability == "In Stock"){
            resolve(product.price)
            
       }else{
        reject("Not in stock")
       }

        
    })
}

fetchProduct(product).then((result)=>{
        console.log(result);
        

}).catch((err)=>{
    console.log(err);
    
})
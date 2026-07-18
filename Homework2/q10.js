function productQynatity(qunatity){
    if(qunatity<5){
        throw " Very less ";

    }

    return "Good"
}

try{
    console.log(productQynatity(4));
}catch(err){
    console.log(err);
    
}
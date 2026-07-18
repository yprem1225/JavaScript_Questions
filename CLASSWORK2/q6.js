try{
    const divide = 100/0
    console.log(divide);
    
}catch(err){
    console.log(err.name+" "+err.message);
}

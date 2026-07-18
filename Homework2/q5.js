function bill(product1,product2,product3,discount=100){
    return product1 +  product2 +  product3 - discount
}

console.log(bill(100,22,33));


function calculateTotal(...prices){
    let total = 0;

    for(let price of prices){
        total+=price;
    }

    return total
}

console.log(calculateTotal(1200, 800, 500, 1500));
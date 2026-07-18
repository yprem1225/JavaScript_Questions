"use strict";
class Product {
    productId;
    productName;
    constructor(productId, productName) {
        this.productId = productId;
        this.productName = productName;
    }
}
class Store {
    static totalProducts = 0;
    productlist = [];
    addProduct(product) {
        this.productlist.push(product);
        Store.totalProducts++;
    }
    static totalCound() {
        return Store.totalProducts;
    }
}
const p = new Product(1, "mOBILE");
const s = new Store();
s.addProduct(p);
console.log(Store.totalProducts());

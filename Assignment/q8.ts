class Product{
    productId:Number;
    productName:String;

    constructor(   productId:Number,productName:String) {
        this.productId = productId ;
        this.productName = productName;
    }
}

class Store{
    static totalProducts:any=0;
    productlist:Product[]=[];

    addProduct(product:Product){
        this.productlist.push(product);
        Store.totalProducts++;
    }

    static totalCound():Number{
        return Store.totalProducts;
    }
}

const p = new Product(1,"mOBILE")

const s = new Store();
s.addProduct(p)
console.log(Store.totalProducts());

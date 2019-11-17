function getTax(price,tax){
    return price*tax/100
}


let salesTax = (product)=>{
    categoreis=["book","food","medicine"]
    var tax=0.0
    if(product.imported){
        tax=tax+getTax(product["quantityPrice"],5)

    }if(!categoreis.includes(product["category"])){
        tax=tax+getTax(product["quantityPrice"],10)
    }

    product["tax"]=tax
    product["priceWithtax"]=product["quantityPrice"]+tax
    return product;
}
module.exports=salesTax

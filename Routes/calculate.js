function getTax(price,tax){
    return price*tax/100
}

let calculate = (productDetails)=>{
    var salseTax=0;
    if(productDetails.imported){
        salseTax+=getTax(productDetails["Price"],5);
    }
    if(!categories.includes(productDetails.category)){
        salseTax+=getTax(productDetails["Price"],10);
    }
   
    productDetails["Tax"]=salseTax
    productDetails["TotalPrice"]=productDetails["Price"]+salseTax

    return productDetails;

}

module.exports = calculate;
let newP1 = new Product("HH001","00000001","Nokia 1100i",'Vang','./image/imge_01.png','new',200,20,18);
let newP2 = new Product("HH001","00000001","Nokia 1100i",'Vang','./image/imge_02.png','new',200,20,18);


const productManger = new ProductManger()

productManger.addProduct(newP1)
productManger.addProduct(newP2)
console.log(productManger.stock)
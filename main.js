
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

let today = new Date();
let time = today.getDate() +"/" + (today.getMonth()+1) + "/" + today.getFullYear()
let id = uuidv4();
// Test class Product
let newP1 = new Product("HH001","00000001","Nokia 1100i",'Vang','./image/imge_01.png','new',200,20,18);
let newP2 = new Product("HH002","00000002","Nokia 1100i",'Trang','./image/imge_02.png','new',200,20,18);
// Test class ProductManger
let manager = new ProductManger();
manager.addProduct(newP1);
manager.addProduct(newP2);
console.log(manager.getQuantityInStock(newP1.code))
// Test class Cart
let newCart = new Cart(id, time);
newCart.getAddCart(newP1.code, newP1.name, 2)
console.log(newCart)




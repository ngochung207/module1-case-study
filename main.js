
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

let today = new Date();
let time = today.getDate() +"/" + (today.getMonth()+1) + "/" + today.getFullYear()

// Test class Product
// Tạo mới sản phẩm
let newP1 = new Product("HH001","00000001","Nokia 1100i",'Vang','./image/imge_01.png','new',200,20,18);
let newP2 = new Product("HH002","00000002","Nokia 1100i",'Trang','./image/imge_02.png','new',200,20,18);
// Test class ProductManger
// Tạo mới quản lý sản phẩm
let managerProduct = new ProductManager();
managerProduct.addProduct(newP1);
managerProduct.addProduct(newP2);
console.log(managerProduct)
// Test class Cart
// Tạo mới giỏ hàng.
let newCart1 = new Cart(uuidv4(), time);
let newCart2 = new Cart(uuidv4(), time);
// Thêm hàng vào giỏ hàng
newCart1.getAddCart(newP1.code, newP1.name, 2)
newCart2.getAddCart(newP2.code, newP2.name, 10)
// console.log(newCart1,newCart2)

// Test class OrderManager
// Tạo mới quản lý các đơn hàng từ giỏ hàng.
let managerOrder = new OrderManager();
managerOrder.addToOrderManager(newCart1);
managerOrder.addToOrderManager(newCart2);
console.log(managerOrder)
// Test khuyen mai
let promotion1 = new Promotion(uuidv4(),'Khuyen mai thang 12','Khuyen mai thang tet','2020-10-01','2020-10-31');
console.log(promotion1.code)






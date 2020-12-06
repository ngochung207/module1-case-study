function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

let today = new Date();
let time = today.getDate() +"/" + (today.getMonth()+1) + "/" + today.getFullYear()
let id = uuidv4();

// Test class Product	// Test class Product
// Tạo mới sản phẩm
let newP1 = new Product("HH001","00000001","Nokia 1100i",'Vang','./image/imge_01.png','new',300,20,18);
let newP2 = new Product("HH002","00000002","Nokia 1100i",'Trang','./image/imge_02.png','new',200,20,18);
console.log("Thong tin san pham 1")
console.log(newP1)
console.log("Thong tin san pham 2")
console.log(newP2)
// Test class ProductManger
let managerProduct = new ProductManager();	// Tạo mới quản lý sản phẩm
managerProduct.addProduct(newP1);
managerProduct.addProduct(newP2);
console.log("Object quản lý sản phẩm")
console.log(managerProduct)
// Test quản lý nhập hàng
// Khởi tạo đơn mua hàng 1
let purchase1 = new Purchase(uuidv4(),"2020-12-10");
purchase1.purchaseOrder(newP1)
console.log("Đơn mua hàng 1:")
console.log(purchase1)
let purchaseOrderManager = new PurchaseOrderManager();
purchaseOrderManager.addProduct(purchase1)
let purchase2 = new Purchase(uuidv4(),"2020-12-12");
purchase2.purchaseOrder(newP2);
console.log("Đơn mua hàng 2:")
console.log(purchase2)
purchaseOrderManager.addProduct(purchase1)
console.log("Quản lý đơn mua hàng")
console.log(purchaseOrderManager)
// Test class Cart
let newCart1 = new Cart(uuidv4(), time);
let newCart2 = new Cart(uuidv4(), time);
// Thêm hàng vào giỏ hàng
newCart1.getAddCart(newP1.code, newP1.name, 2)
newCart2.getAddCart(newP2.code, newP2.name, 10)
console.log("Thông tin giỏ hàng 1")
console.log(newCart1)
console.log("Thông tin giỏ hàng 2")
console.log(newCart2)
// Tạo ông quản lý giỏ hàng
let orderManager = new OrderManager();
orderManager.addToOrderManager(newCart1);
orderManager.addToOrderManager(newCart2);
console.log("Quản lý đặt hàng")
console.log(orderManager)
// Test class OrderManager
// Tạo mới quản lý các đơn hàng từ giỏ hàng.

function getValueOfPurchase(){
    let info_date = document.getElementById('formGroupExampleInput7').value;
    let info_code = document.getElementById('formGroupExampleInput').value
    let info_name = document.getElementById('formGroupExampleInput2').value
    let info_imei = document.getElementById('formGroupExampleInput3').value
    let info_description = document.getElementById('formGroupExampleInput6').value
    let info_amount = document.getElementById('formGroupExampleInput4').value
    let info_cost = document.getElementById('formGroupExampleInput5').value
    let info_img = document.getElementById('img').src;
    return {date:info_date,code:info_code,name:info_name,imei:info_imei,description:info_description,amount:info_amount,cost:info_cost,img:info_img}
}
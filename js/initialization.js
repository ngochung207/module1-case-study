function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
// Khởi tạo các biến làm việc
const today = new Date();
const time = today.getDate() +"/" + (today.getMonth()+1) + "/" + today.getFullYear()
// Khởi tạo đối tượng quản lý người dùng
let userManager = new UserInfo();
// Khởi tạo đối tượng quản lý sản phẩm
let productManager = new ProductManager();
// Khởi tạo đối tượng quản lý giỏ hàng.
let cartManager = new OrderManager();
// Khởi tạo đối tượng quản lý mua hàng.
let purchaseOrderManager = new PurchaseOrderManager();
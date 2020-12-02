class Cart{
    constructor(_id, _time) {
        this.id = _id;
        this.time = _time;
        this.cart = [];
    }

    // Phương thức thêm hàng vào giỏ hàng.
    getAddCart(codeProduct, quantity) {
        // Kiểm tra số lượng hàng tồn trong kho.
        let quantityInStock = ProductManger.getQuantityInStock(codeProduct)
        let nameProduct = ProductManger.stock[ProductManger.getIndexProductInStock(codeProduct)].name;
        if (quantityInStock >= quantity){
            this.cart.push({codeProduct, nameProduct})
        }
    }
}

class Order{
    constructor(_id, _customerID, _timeOrder){
        this.idOder = _id;
        this.customerID = _customerID;
        this.timeOrder = _timeOrder;
        this.order = [];
    }

}

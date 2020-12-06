    class Purchase{
    // Mã mua hàng, mua ngày nào, mua cái gì
    constructor(_id, _date) {
        this.id = _id;
        this.date = _date;
        this.detail = [];
    }

    purchaseOrder(product){
        this.detail.push(product)
    }
}

class PurchaseOrderManager{
    constructor(){
        this.detail = [];
    }

    addProduct(purchase){
        this.detail.push(purchase)
    }
}
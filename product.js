class Product {
    constructor(_code, _imei, _name, _description, _img, _type, _amount, _price, _cost){
        this.code = _code;
        this.imei = _imei;
        this.name = _name;
        this.description = _description;
        this.img = _img;
        this.type = _type;
        this.amount = _amount;
        this.price = _price;
        this.cost = _cost
    }

}

class ProductManger {
    constructor() {
        this.stock = [];
    }

    /** Thêm sản phẩm mới.
     *  Kiểm tra mã sản phẩm mới đưa vào đã có trong stock chưa.
     *  Nếu chưa có thêm mới ngay.
     *  Nếu đã có thì CỘNG DỒN vào mã đã tồn tại trong kho.
     */

    addProduct(newProduct) {
        if (this.checkCodeInStock(newProduct.code)){
            this.stock.map(element => {
                if(element.code === newProduct.code){
                    element.amount += newProduct.amount;
                }
            })
        } else this.stock.push(newProduct)
    }

    // Xóa sản một sản phẩm. Tham số truyền vào là id sản phẩm
    deleteProduct(codeProduct){
        this.stock.split(codeProduct,1);
    }
    // Lấy tồn kho, trả ra kết quả là số lượng hàng trong kho
    getQuantityInStock(codeProduct){
        let sum = 0;
        if (this.checkCodeInStock(codeProduct)){
            sum = this.stock[this.getIndexProductInStock(codeProduct)].amount;
            return sum;
        } else return sum;
    }
    // Kiểm tra mã hàng tồn tại trong kho hay không.
    checkCodeInStock(code){
        let size = this.stock.length;
        for (let index = 0; index < size; index++){
            if(this.stock[index].code === code){
                return true;
            }
        }
        return false;
    }
    // Lấy ra thông tin vị trí của sản phẩm trong kho.
    getIndexProductInStock(codeProduct) {
        if (this.checkCodeInStock(codeProduct)) {
            let size = this.stock.length;
            for (let index = 0; index < size; index++) {
                if (this.stock[index].code === codeProduct) {
                    return index;
                }
            }
        }
        return -1;
    }
    // Lấy tên sản phẩm từ mã sản phẩm.
    getNameProduct(codeProduct) {
        let i = this.getIndexProductInStock(codeProduct);
        if (i !== -1){
            return this.stock[i].name
        }
    }
}


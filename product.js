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

class ProductManager {
    constructor() {
        this.stock = [];
    }

    getLengthStock() {
        // Đếm số lượng hàng hóa trong stock
        return this.stock.length;
    }

    getIndexProductInStock(codeProduct) {
        // Lấy ra thông tin vị trí của sản phẩm trong kho.
        if (this.checkCodeInStock(codeProduct)) {
            let size = this.getLengthStock();
            for (let index = 0; index < size; index++) {
                if (this.stock[index].code === codeProduct) {
                    return index;
                }
            }
        }
        return -1;
    }
    getNameProduct(codeProduct) {
        // Lấy tên sản phẩm từ mã sản phẩm.
        let i = this.getIndexProductInStock(codeProduct);
        if (i !== -1){
            return this.stock[i].name
        }
    }

    getQuantityInStock(codeProduct){
        // Lấy tồn kho, trả ra kết quả là số lượng hàng trong kho
        let sum = 0;
        if (this.checkCodeInStock(codeProduct)){
            sum = this.stock[this.getIndexProductInStock(codeProduct)].amount;
            return sum;
        } else return sum;
    }

    checkCodeInStock(code){
        // Kiểm tra mã hàng tồn tại trong kho hay không.
        let size = this.getLengthStock();
        for (let index = 0; index < size; index++){
            if(this.stock[index].code === code){
                return true;
            }
        }
        return false;
    }

    addProduct(newProduct) {
        /** Thêm sản phẩm mới.
         *  Kiểm tra mã sản phẩm mới đưa vào đã có trong stock chưa.
         *  Nếu chưa có thêm mới ngay.
         *  Nếu đã có thì CỘNG DỒN vào mã đã tồn tại trong kho.
         */
        if (newProduct.amount >= 0) {
            if (this.checkCodeInStock(newProduct.code)) {
                this.stock.map(element => {
                    if (element.code === newProduct.code) {
                        element.amount += newProduct.amount;
                    }
                })
            } else this.stock.push(newProduct)
        } else alert("số lượng không được âm")
    }
    deleteProduct(codeProduct){
        // Xóa sản một sản phẩm. Tham số truyền vào là id sản phẩm
        this.stock.split(codeProduct,1);
    }
}


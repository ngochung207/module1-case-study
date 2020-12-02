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
    // Kiểm tra tồn kho, trả ra kết quả là số lượng hàng trong kho
    checkQuantityInStock(codeProduct){
        let sum = 0;
        if (this.stock.length){
            this.stock.forEach(element => {
                if(element.code === codeProduct){
                    sum = element.amount;
                    break; // ????
                }
            })
        }
        return sum;
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
}

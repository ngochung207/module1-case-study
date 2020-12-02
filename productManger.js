class ProductManger {
    constructor() {
        this.stock = [];
    }

    /** Thêm sản phẩm mới.
     *  Kiểm tra mã sản phẩm mới đưa vào đã có trong stock chưa.
     *  Nếu chưa có thêm mới ngay.
     *  Nếu đã có thì cộng dồn vào mã đã tồn tại trong kho.
     */
    addProduct(newProduct) {
        let result = this.stock.some(element => {
          return element.code  === newProduct.code
        })
        if (result){
            this.stock.map(element => {
                if(element.code === newProduct.code){
                    element.amount += newProduct.amount;
                }
            })
        } else this.stock.push(newProduct)
    }

    // Xóa sản một sản phẩm. Tham số truyền vào là id sản phẩm
    deleteProduct(idProduct){
        this.stock.split(idProduct,1);
    }
    // Kiểm tra tồn kho, trả ra kết quả là số lượng hàng trong kho
    quantityInStock(idProduct){
        let sum = 0;
        if (this.stock.length){
            this.stock.forEach(element => {
                if(element.code === idProduct){
                    sum = element.amount;
                    break;
                }
            })
        }
        return sum;
    }
}

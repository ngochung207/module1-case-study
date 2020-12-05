class Stock{
    /**
     * Lớp đối tượng kho gồm các thuộc tính:
     * 1. Mã kho.
     * 2. Tên kho.
     * 3. Thông tin hàng hóa Object(product)
     */
    constructor(_code, _name){
        this.code = _code;
        this.name = _name;
        this.details = []
    }

    pushProductToStock(product){
        this.details.push(product)
    }

}
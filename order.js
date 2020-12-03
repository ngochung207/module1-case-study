class Cart{
    constructor(_id, _time) {
        this.id = _id;
        this.time = _time;
        /**
         *Giỏ hàng bao gồm thông tin:
         * 1. Mã hàng,
         * 2. Tên hàng,
         * 3. Số lượng,
         * [{Mã hàng, Tên hàng, Số lượng}]
         */
        this.cart = [];
    }

    getAddCart(code, name, quantity) {
        // Phương thức thêm hàng vào giỏ hàng.(thêm cái gì, thêm bao nhiêu)
        /**
         *
         * TODO 1. Kiểm tra số lượng tồn của mã hàng muốn thêm vào giỏ hàng.
         * if (số lượng tồn > 0) then
         *      2. Nếu số lượng muốn thêm < số lượng tồn --> cho phép thêm vào giỏ hàng số lượng = số lượng muốn thêm
         *      3. Nếu số lượng muốn thêm > số lượng tồn --> che phép thêm vào giỏ hàng số lượng = số lượng tồn.
         * else
         *      4. Số lượng = 0
         */
        this.cart.push(code, name, quantity)

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

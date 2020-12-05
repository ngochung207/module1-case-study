class Promotion{
    constructor(_code, _name, _description, _discount, _fromTime, _toTime){
        this.code = _code;
        this.name = _name;
        this.description = _description;
        this.discount = _discount;
        this.fromTime = new Date(_fromTime).getTime();
        this.toTime = new Date(_toTime).getTime();
        this.status = this.getStatus(this.toTime);
    }

    getStatus(time){
        // Kiểm tra chương trình khuyến mãi còn thời gian sử dụng không.
        let date = new Date();
        let today = date.getTime();
        if (today >= this.fromTime && today <= this.toTime){
            return this.status = true;
        } else {
            return this.status = false;
        }
    }
}

class PromotionManager{
    constructor(){
        this.promotionManager = [];
    }
    // Thêm coupon
    addCoupon (coupon){
        this.promotionManager.push(coupon);
    }
    // Kiểm tra một mã khuyến mãi còn sử dụng được hay không.
    getStatusCoupon (couponID){
        this.promotionManager.forEach(element => {
            if(element.status === couponID){
                return element.status;
            }
        });
    }
}
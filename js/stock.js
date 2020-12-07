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
class ImportExportInventory {
    /**
     * Ý nghĩa: Là một mảng quản lý mã hàng, tổng nhập, tổng xuất, tồn cuối của sản phẩm.
     * Quản lý nhập xuất tồn của kho hàng.
     *
     */
    constructor(purchase, _type) {
        this.id = purchase.id;
        this.type = _type;
        this.date = purchase.date;
        this.code = purchase.detail[0].code;
        this.amount = purchase.detail[0].amount;
    }

}
class ImportExportInventoryManager{
    constructor(){
        this.detail = [];
    }

    addToImportExportManager(importExportInventory){
        this.detail.push(importExportInventory)
    }
}
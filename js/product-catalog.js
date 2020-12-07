class ProductCatalog{
    constructor(_code, _name, _description, _img) {
        this.code = _code;
        this.name = _name;
        this.description = _description;
        this.img = _img;
    }
}

class ProductCatalogManager{
    constructor(){
        this.detail = []
    }

    addProductCatalog(productCatalog){
        this.detail.push(productCatalog)
    }
}
function buttonSignUp(user_text, pass_text){
    /** Tạo nút đăng ký
     * thêm dữ liệu người dùng vào dataManagerUser
     */
    let newUser = new User(user_text, pass_text);
    userManager.addUserInfo(newUser);
    clearInput();
    alert('Dang ky thanh cong')
}

function clearInput(){
    /**
     * Làm mới ô đăng nhập
     */
    document.getElementById('email').value = ''
    document.getElementById('pwd').value = ''
}

function buttonLogin(user_text, pass_text){
    /**
     *  Tạo nút đăng nhập
     *  Đăng nhập thành công hiển thị full menu cho người dùng làm việc
     */
    if(userManager.getLogin(user_text,pass_text)){
        // document.getElementById('login-true').style.display = "block";
        window.location.href = './home.html'
    } else {
        confirm('Dang nhap lai')
    }
    clearInput();
}

function getFileName(){
    let fileElement = document.getElementById('strImg');
    let nameImg = fileElement.files[0].name;
    let srcElement = document.getElementById('img');
    srcElement.src = "../image/" + nameImg;
}

function getValueOfPurchase(){
    let info_date = document.getElementById('formGroupExampleInput7').value;
    let info_code = document.getElementById('formGroupExampleInput').value;
    let info_name = document.getElementById('formGroupExampleInput2').value;
    let info_imei = document.getElementById('formGroupExampleInput3').value;
    let info_description = document.getElementById('formGroupExampleInput6').value;
    let info_amount = parseInt(document.getElementById('formGroupExampleInput4').value);
    let info_cost = parseInt(document.getElementById('formGroupExampleInput5').value);
    let info_img = document.getElementById('img').src;
    return {date:info_date,code:info_code,name:info_name,imei:info_imei,description:info_description,amount:info_amount,cost:info_cost,img:info_img}
}

function checkInput(){
    let infoArr = new Array();
    let info_date = document.getElementById('formGroupExampleInput7').value;
    let info_code = document.getElementById('formGroupExampleInput').value;
    let info_name = document.getElementById('formGroupExampleInput2').value;
    let info_imei = document.getElementById('formGroupExampleInput3').value;
    let info_description = document.getElementById('formGroupExampleInput6').value;
    let info_amount = document.getElementById('formGroupExampleInput4').value;
    let info_cost = document.getElementById('formGroupExampleInput5').value;
    let info_img = document.getElementById('img').src;

    infoArr.push(info_date,info_code,info_name,info_imei,info_description,info_amount,info_cost, info_img);

    let result = infoArr.some(value => {
        value === "";
    })

    if (result){
         return false;
    } else return true;
}

function refresh(){
    document.getElementById('formGroupExampleInput7').value = '';
    document.getElementById('formGroupExampleInput').value = '';
    document.getElementById('formGroupExampleInput2').value = '';
    document.getElementById('formGroupExampleInput3').value = '';
    document.getElementById('formGroupExampleInput6').value = '';
    document.getElementById('formGroupExampleInput4').value = '';
    document.getElementById('formGroupExampleInput5').value = '';
    document.getElementById('img').src = '../image/default-image.jpg';
}

function saveInfo(){
    if (checkInput()){
        let info = getValueOfPurchase();
        // Khởi tạo đối tượng sản phẩm
        let product = new Product(info.code, info.imei, info.name, info.description, info.img, '', info.amount, '', info.cost);
        let purchase = new Purchase(uuidv4(),info.date);
        purchase.purchaseOrder(product);
        // Thêm đối tượng sản phẩm vào đối tượng quản lý mua hàng
        purchaseOrderManager.addProduct(purchase);
        // Thêm sản phẩm vào đối tượng quản lý sản phẩm.
        // productManager.addProduct(product);
        // Thêm sản phẩm vào đối tượng quản lý nhập xuất kho.
        let importExportInventory = new ImportExportInventory(purchase,'N');
        importExportInventoryManager.addToImportExportManager(importExportInventory);

        addToLocalStorage('purchaseOrderManager',purchaseOrderManager);
        // addToLocalStorage('productManager',productManager);
        addToLocalStorage('importExportInventoryManager',importExportInventoryManager);
        // // Khởi tạo biến lưu quản lý đơn
        // let arr = new Array();
        // arr.push(purchaseOrderManager,productManager,importExportInventoryManager)
        // // Lưu dữ liệu vào Local Storage
        // addToLocalStorage(purchase,arr);
        // // Làm mới nhập liệu
        refresh();

    } else {
        alert("Dien du di lieu")
    }
}

function saveProductCatalog(code, name, description, img){
    if (!checkCodeInArr(code, getLocalStorage('productCatalogManager'))) {
        // Tạo mới đối tượng danh mục sản phẩm
        let productCatalog = new ProductCatalog(code, name, description, img);
        // Đưa đối tượng vào quản lý danh mục sản phẩm.
        productCatalogManager.addProductCatalog(productCatalog)
        // Lưu dữ liệu quản lý danh mục sản phẩm vào local storage
        addToLocalStorage('productCatalogManager', productCatalogManager)

        document.getElementById('formGroupExampleInput').value = '';
        document.getElementById('formGroupExampleInput2').value = '';

        document.getElementById('formGroupExampleInput6').value = '';

        document.getElementById('img').src = "../image/default-image.jpg"
    } else {
        confirm('Mã hàng ' + code + ' đã tồn tại');
    }
}

function addToLocalStorage(key,arr){
    localStorage.setItem(key,JSON.stringify(arr));
}

function showAllProduct(){
    /**
     *
     * Lấy từ Location Storage các sản phẩm
     * TODO bổ sung tính năng, chỉ cho phép hiển thị các mặt hàng còn tồn.
     * TODO lấy dữ liệu giá bán theo ngày mua.
     */
    let content="";
    let arrManagerInventory = getLocalStorage('importExportInventoryManager');
    let list = getListCodeProductInventory(arrManagerInventory);
    for (let i = 0; i < list.length; i++) {
        let code = list[i];
        let info = findInfoProduct(code, getLocalStorage('productCatalogManager'))
        if (getInventory(list[i], 'N', arrManagerInventory) - getInventory(list[i], 'X', arrManagerInventory) > 0) {
            content += '         <tr>\n' +
                '    <th scope="row">' + (parseInt(i) + 1) + '</th>\n' +
                '    <td>' + info[1] + '</td>\n' +
                '    <td>' + info[2] + '</td>\n' +
                '    <td><img src=' + info[3] + ' alt=""></td>\n' +
                '    <td>' + arrManagerInventory[i].price + '</td>\n' +
                '    <td><button class="btn btn-primary btn-sm" data-toggle="modal" data-target="#dialog1" onclick="ref();">Mua</button></td>\n' +
                '    <td>\n' +
                '        <button style="width: 60px; margin-right: 10px" class="btn btn-primary btn-sm">Edit</button>\n' +
                '        <button style="width: 70px" class="btn btn-primary btn-sm">Delete</button>\n' +
                '    </td>\n' +
                '</tr>'
        }
    }
    document.getElementById("list").innerHTML= content;
}

function payment_(){
    /**
     *TODO áp dụng chính sách giá và chính sách chiết khấu
     */
    let current = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' });
    let mount = parseInt(document.getElementById('amount').value);
    if (mount > 0) {
        let price = 2000000;
        let purchase_ = 500000;
        document.getElementById('price').innerHTML = current.format(price)
        document.getElementById('purchase').innerHTML = current.format(purchase_)
        document.getElementById('payment').innerHTML = current.format(mount * price - purchase_)
    } else {
        document.getElementById('price').innerHTML = current.format(0)
        document.getElementById('purchase').innerHTML = current.format(0)
        document.getElementById('payment').innerHTML = current.format(0)

    }
}

function ref(){
    /**
     * Làm mới ô chọn mua khi mua tiếp hàng.
     */
    document.getElementById('amount').value = ''
    document.getElementById('price').innerHTML = ''
    document.getElementById('purchase').innerHTML = ''
    document.getElementById('payment').innerHTML = ''
}

function showTablePrice(){
    /**
     * Cho phép Admin nhập chính sách giá bán
     */
    let content="";
    let arr;
    for (let i = 0; i < localStorage.length; i++) {
        arr = JSON.parse(localStorage.getItem(localStorage.key(i)));
        content +='<tr>\n'+
                    '<th scope="row">' + (parseInt(i)+1) + '</th>\n' +
                    '<td>' + arr.detail[0].name + '</td>\n' +
                    '<td>' + arr.detail[0].description + '</td>\n' +
                    '<td><img src=' + arr.detail[0].img +' alt=""></td>\n' +
                    '<td><input type="date"></td>' +
                    '<td><input type="date"></td>' +
                    '<td><input type="number"></td>' +
                    '<td>\n' +
                        '<button style="margin-right: 10px" class="btn btn-primary btn-sm">Apply</button>' +
                        '<button class="btn btn-primary btn-sm">Edit</button>' +
                    '</td>\n' +
                    '<tr>'
    }
    document.getElementById("list-price-policy").innerHTML= content;
}

function getInventory(key, type, arr){
    let sum = 0;
    for(let i=0; i < arr.length; i++){
        if(arr[i].code === key && arr[i].type === type){
            sum += parseInt(arr[i].amount)
        }
    }
    return sum
}

function getListCodeProductInventory(arr){
    // Lấy ra danh sách mã sản phẩm trong kho.
    let result = [];
    arr.forEach(function(element){
        if (!result.includes(element.code)){
            result.push(element.code)
        }
    })
    return result;
}

function getLocalStorage(key){
    if(localStorage.getItem(key) == null){
        return [];
    } else {
        return JSON.parse(localStorage.getItem(key))['detail'];
    }
}

function checkCodeInArr(key, arr){
    // arr.some(function(element){
    //     return element.code === key;
    // })
    for (let i = 0; i < arr.length; i++){
        if(arr[i].code === key){
            return true;
        }
    }
    return false;
}

function findInfoProduct(code, key){
    let arr = getLocalStorage(key);
    let result = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i].code === code){
            result.push(arr[i].code, arr[i].name, arr[i].description, arr[i].img);
            break;
        }
    } return result;
}
function showInfo(code, key){
    let arr = findInfoProduct(code, key);
    document.getElementById("formGroupExampleInput2").value = arr[1];
    document.getElementById("formGroupExampleInput6").value = arr[2];
    document.getElementById("img").src = arr[3];

}
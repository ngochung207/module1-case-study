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
    let info_code = document.getElementById('formGroupExampleInput').value
    let info_name = document.getElementById('formGroupExampleInput2').value
    let info_imei = document.getElementById('formGroupExampleInput3').value
    let info_description = document.getElementById('formGroupExampleInput6').value
    let info_amount = document.getElementById('formGroupExampleInput4').value
    let info_cost = document.getElementById('formGroupExampleInput5').value
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
    document.getElementById('img').src = '';
}

function saveInfo(){
    if (checkInput()) {
        let info = getValueOfPurchase();

        let product = new Product(info.code, info.imei, info.name, info.description, info.img, '', info.amount, '', info.cost);
        productManager.addProduct(product);

        let purchase = new Purchase(uuidv4(),info.date);
        purchase.purchaseOrder(product);
        addToLocalStorage(purchase)

        purchaseOrderManager.addProduct(purchase);
        refresh();

    } else {
        alert("Dien du di lieu")
    }
}

function addToLocalStorage(pr){
    localStorage.setItem(pr.id,JSON.stringify(pr))
}

function showAllProduct(){
    let content="";
    let arr;
    for (let i = 0; i < localStorage.length; i++) {
        arr = JSON.parse(localStorage.getItem(localStorage.key(i)));
        content += '         <tr>\n' +
        '    <th scope="row">' + (parseInt(i)+1) + '</th>\n' +
        '    <td>' + arr.detail[0].name +'</td>\n' +
        '    <td>' + arr.detail[0].description + '</td>\n' +
        '    <td><img src=' + arr.detail[0].img +' alt=""></td>\n' +
        '    <td>' + arr.detail[0].price + '</td>\n' +
        '    <td><button class="btn btn-primary btn-sm" data-toggle="modal" data-target="#dialog1" onclick="ref();">Mua</button></td>\n' +
        '    <td>\n' +
        '        <button style="width: 60px; margin-right: 10px" class="btn btn-primary btn-sm">Edit</button>\n' +
        '        <button style="width: 70px" class="btn btn-primary btn-sm">Delete</button>\n' +
        '    </td>\n' +
        '</tr>'
    }
    document.getElementById("list").innerHTML= content;
}

function payment_(){
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
    document.getElementById('amount').value = ''
    document.getElementById('price').innerHTML = ''
    document.getElementById('purchase').innerHTML = ''
    document.getElementById('payment').innerHTML = ''
}
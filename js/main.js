function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
// Khởi tạo các biến làm việc
const today = new Date();
const time = today.getDate() +"/" + (today.getMonth()+1) + "/" + today.getFullYear()
// Khởi tạo đối tượng quản lý người dùng
let userManager = new UserInfo();
// Khởi tạo đối tượng quản lý sản phẩm
let productManager = new ProductManager();
// Khởi tạo đối tượng quản lý giỏ hàng.
let cartManager = new OrderManager();


function buttonSignUp(user_text, pass_text){
    document.getElementById("username")
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
        refresh();

    } else {
        alert("Dien du di lieu")
    }
}


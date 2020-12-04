function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
// Khởi tạo các biến làm việc
const today = new Date();
const time = today.getDate() +"/" + (today.getMonth()+1) + "/" + today.getFullYear()
const userManager = new UserInfo();

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
        alert('Dang nhap thanh cong')
    } else {
        confirm('Dang nhap lai')
    }
    clearInput();
}

function showPageProduct(){
   alert("tinh nang mua hang")
}
class User{
    constructor(_userName,_fullName,_email, _pass) {
        this.userName = _userName;
        this.fullName = _fullName;
        this.email = _email;
        this.pass = _pass
    }
}

class UserInfo{
    constructor(){
        this.userInfo = [];
    }
    // Kiểm tra login. True: đăng nhập đung. False: đăng nhập sai
    /**
     * Cho phép đăng nhập nếu user và pass khớp nhau.
     */
    getLogin(user, pass){
        let key = user + pass;
        let result = false;
        this.userInfo.some(element => {
            let lock = element.userName + element.pass;
            if (key === lock){
                result = true;
            }
        })
        return result;
    }
    // Thay đổi email
    // Thay đổi full name
    // Thay đổi pass
}
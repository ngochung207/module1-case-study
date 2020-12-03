class User{
    constructor(_userName, _pass) {
        this.userName = _userName;
        this.pass = _pass;
    }
}

class UserInfo{
    constructor (){
        this.userInfo = [];
    }

    getLogin(user, pass){
        // Kiểm tra login. True: đăng nhập đung. False: đăng nhập sai
        /**
         * Cho phép đăng nhập nếu user và pass khớp nhau.
         */
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

    addUserInfo(newUser){
        this.userInfo.push(newUser);
    }
    // Thay đổi email
    // Thay đổi full name
    // Thay đổi pass
}
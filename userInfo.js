class UserInfo{
    constructor(){
        this.userInfo = [];
    }
    // Kiểm tra login
    /**
     * Cho phép đăng nhập nếu user và pass khớp nhau.
     */
    getLogin(user, pass){
        let key = user + pass;
        let result = false;
        this.userInfo.forEach(element => {
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
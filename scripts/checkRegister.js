function checkRegister() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var passwordagain = document.getElementById("passwordagain").value;
    var email=document.getElementById("email").value;

    if (username===null||username===""){
        alert("请输入用户名!");
        return false;
    }
    else if (password === null || password === "") {
        alert("请输入密码");
        return false;
    }
    else if ((password!=passwordagain)) {
        alert("两次密码不一致");
        return false;
    }
    else if (email===null||email===""){
        alert("请输入邮箱");
        return false;
    }
    else{
        alert("注册成功,去登陆！");
        window.location.href="../pages/login.html";
        return true;
    }
}


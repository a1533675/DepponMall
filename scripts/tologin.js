function tologin(){
    var iftologin=confirm("注册成功，是否前往登录页面？");
    if (iftologin == true) {
        window.location.href="../pages/login.html";
    }
    else{
        alert("您点击了都否。");
    }
}
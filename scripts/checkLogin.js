function checkLogin() {

    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;

    if (username == null || username == "") {
        alert("请输入用户名");
        logindemo.username.focus();
        return;
    }
    else if ((password == null) || password==""){
        alert("请输入密码");
        logindemo.password.focus();
        return;
    }
    else{
         if (username=="admin"&&password=="admin"){
             logindemo.submit();
             window.location.href="../pages/home-login.html"
        }
         else{
             alert("Error！用户名或密码不正确.");
         }
    }
}
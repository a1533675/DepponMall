function checklogout(){
    var logout=confirm("确定要退出吗？")
    if (logout == true) {
        window.location.href="../pages/home-nologin.html"
        return true;
    }
    else{
        return false;
    }
}
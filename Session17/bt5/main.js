function login() {
    const inputUsername = document.getElementById("username").value;
    const inputPassword = document.getElementById("password").value;

    if (inputUsername === "huanrose@gmail.com" &&
        inputPassword === "123456") {
            alert("Đăng nhập thành công!");
        } else {
            alert("Đăng nhập thất bại! Vui lòng kiểm tra lại.");
        }
}
document.querySelector(".toggle-password").addEventListener("click", function () {
  let inputPassword = document.querySelector("#password");
  inputPassword.type = inputPassword.type === "password" ? "text" : "password";
});

let users = JSON.parse(localStorage.getItem("users")) || [];

document.getElementById("form").onsubmit = function (e) {
  e.preventDefault();
  let email = document.querySelector("#email").value.trim();
  let password = document.querySelector("#password").value.trim();

  if (!validateData(email, password)) return;

  if (users.some(user => user.email === email && user.password === password)) {
    alert("Đăng nhập thành công!");
    window.location.href = "dashboard.html";
  } else {
    alert("Email hoặc mật khẩu không đúng!");
  }
};

function validateData(email, password) {
  let isValid = true;
  let errorEmail = document.querySelector(".error-email");
  let errorPassword = document.querySelector(".error-password");
  errorEmail.textContent = email ? "" : "Email không được để trống";
  errorPassword.textContent = password ? "" : "Password không được để trống";
  return email && password;
}

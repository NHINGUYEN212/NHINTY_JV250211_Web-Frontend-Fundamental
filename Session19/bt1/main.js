let users = JSON.parse(localStorage.getItem("users")) || [];

const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");

const errorEmail = document.querySelector(".error-email");
const errorPassword = document.querySelector(".error-password");
const errorConfirmPassword = document.querySelector(".error-confirm-password");


function showError(input, message, errorElement) {
  errorElement.innerText = message;
  input.style.border = message ? "1px solid red" : "";
}

function validateData() {
  let isValid = true;

  if (!emailInput.value.trim()) {
    showError(emailInput, "Email không được để trống", errorEmail);
    isValid = false;
  } else if (users.some((user) => user.email === emailInput.value)) {
    showError(emailInput, "Email đã tồn tại!", errorEmail);
    isValid = false;
  } else {
    showError(emailInput, "", errorEmail);
  }

  if (!passwordInput.value.trim()) {
    showError(passwordInput, "Password không được để trống", errorPassword);
    isValid = false;
  } else {
    showError(passwordInput, "", errorPassword);
  }

  if (!confirmPasswordInput.value.trim()) {
    showError(confirmPasswordInput, "Xác nhận mật khẩu không được để trống", errorConfirmPassword);
    isValid = false;
  } else if (passwordInput.value !== confirmPasswordInput.value) {
    showError(confirmPasswordInput, "Xác nhận mật khẩu không trùng khớp", errorConfirmPassword);
    isValid = false;
  } else {
    showError(confirmPasswordInput, "", errorConfirmPassword);
  }
  return isValid;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (validateData()) {
    const newUser = {
      email: emailInput.value,
      password: passwordInput.value,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Đăng ký thành công!");
    form.reset();
  }
});

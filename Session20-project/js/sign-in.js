// ===========1. lay du lieu tu localStorage ============

let usersData = JSON.parse(localStorage.getItem("usersData")) || [];

// ===========2. lay cac phan tu HTML tu form dang nhap ============

let form = document.getElementById("sign-in-form");
let email = document.getElementById("email");
let password = document.getElementById("password");

let alertError = document.getElementById("alert-error");
let errorMessage = document.getElementById("error-message");
let errorButton = document.getElementById("error-btn");
let alertSuccess = document.getElementById("alert-success");
let rememberMeCheckbox = document.getElementById("rememberMe");

// ===========3. tu dong dien email va mat khau neu nguoi dung da luu truoc do ============

window.onload = function () {
    let rememberedEmail = localStorage.getItem("rememberedEmail");
    let rememberedPassword = localStorage.getItem("rememberedPassword");

    if (rememberedEmail && rememberedPassword) {
        email.value = rememberedEmail;
        password.value = rememberedPassword;
        rememberMeCheckbox.checked = true;
    }
};

// ===========4. ham kiem tra du lieu nhap vao co day du hay khong ============

function validateData() {
    let check = true;
    let messages = [];

    if (email.value.trim() === "") {
        messages.push("Email is required");
        check = false;
    }

    if (password.value.trim() === "") {
        messages.push("Password is required");
        check = false;
    }

    if (!check) {
        alertError.style.display = "block";
        errorMessage.innerHTML = messages.join("<br>");
        // responsive mobile: khi co alert-error thi gan class show-alert-error vao body de hien thi alert-error chinh giua
        // va an di logo va h1 (css-responsive).
        document.body.classList.add("show-alert-error");
    } else {
        alertError.style.display = "none";
    }

    return check;
}

// ===========5. ham kiem tra xem email va mat khau co dung khong ============

function checkEmailAndPassword(email, password) {
    return usersData.some(
        (user) => user.email === email && user.password === password
    );
}

// ===========6. xu ly submit ============

form.onsubmit = function (e) {
    e.preventDefault();

    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();
    // kiem tra du lieu co hop le hay khong
    if (validateData()) {
        if (checkEmailAndPassword(emailValue, passwordValue)) {
            // neu nguoi dung co chon Remember Me thi luu email va mat khau vao localStorage
            if (rememberMeCheckbox.checked) {
                localStorage.setItem("rememberedEmail", emailValue);
                localStorage.setItem("rememberedPassword", passwordValue);
            } else {
                localStorage.removeItem("rememberedEmail");
                localStorage.removeItem("rememberedPassword");
            }
            // hien thi thong bao dang nhap thanh cong
            alertSuccess.style.display = "block";
            // sau 1.5 giay thi chuyen huong sang trang dashboard
            setTimeout(() => {
                alertSuccess.style.display = "none";
                window.location.href = "./pages/dashboard.html";
            }, 1500);
        } else {
            // neu email hoac mat khau sai thi hien thi thong bao loi
            alertError.style.display = "block";
            errorMessage.innerText = "Invalid email or password";
            // va an di logo va h1 (css-responsive).
            document.body.classList.add("show-alert-error");
        }
    }
};

// =========== su kien khi nguoi dung bam nut dong thong bao loi ============

errorButton.onclick = function () {
    alertError.style.display = "none";
    document.body.classList.remove("show-alert-error");
};

// ===========1. lay du lieu tu localStorage ============

let usersData = JSON.parse(localStorage.getItem("usersData")) || [];

// ===========2. lay cac phan tu HTML ============

let form = document.getElementById("sign-up-form");
let email = document.getElementById("email");
let userName = document.getElementById("username");
let password = document.getElementById("password");

let alertError = document.getElementById("alert-error");
let errorMessage = document.getElementById("error-message");
let errorButton = document.getElementById("error-btn");
let alertSuccess = document.getElementById("alert-success");

// ===========3. Regex validate ============

function validEmail(email) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

function validPassword(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);
}

// ===========4. kiem tra email da dang ky hay chua ============

function isEmailExists(email) {
    return usersData.some((user) => user.email === email);
}

// ===========5 Validate du lieu ============

function validateData(email, userName, password) {
    let messages = [];
    // validate email
    if (email === "") {
        messages.push("Email is required");
    } else if (!validEmail(email)) {
        messages.push("Invalid email format");
    } else if (isEmailExists(email)) {
        messages.push("Email already exists");
    }
    // validate username
    if (userName === "") {
        messages.push("Username is required");
    }
    // validate password
    if (password === "") {
        messages.push("Password is required");
    } else if (!validPassword(password)) {
        messages.push(
            "Password must be at least 8 characters long and contain uppercase letters, lowercase letters, and numbers"
        );
    }
    // kiem tra co error khong va hien thi thong bao
    if (messages.length > 0) {
        alertError.style.display = "block";
        errorMessage.innerHTML = messages.join("<br>");
        // responsive mobile: khi co alert-error thi gan class show-alert-error vao body de hien thi alert-error chinh giua
        // va an di logo va h1 (css-responsive).
        document.body.classList.add("show-alert-error");
        return false;
    } else {
        alertError.style.display = "none";
        return true;
    }
}

// ===========6. tao id duy nhat ============

function generateUserId() {
    let maxId = 0;
    for (let i = 0; i < usersData.length; i++) {
        let currentId = Number(usersData[i].id);
        if (currentId > maxId) {
            maxId = currentId;
        }
    }
    return maxId + 1;
}

// ===========7. xu ly submit ============

form.onsubmit = function (e) {
    e.preventDefault();

    let emailValue = email.value.trim();
    let userNameValue = userName.value.trim();
    let passwordValue = password.value.trim();

    // chi khi du lieu hop le moi thuc hien dang ky va luu vao localStorage

    if (validateData(emailValue, userNameValue, passwordValue)) {
        let newUser = {
            id: generateUserId(),
            email: emailValue,
            username: userNameValue,
            password: passwordValue,
            role: "USER",
            birthday: "",
            status: true,
            description: "",
        };

        usersData.push(newUser);
        localStorage.setItem("usersData", JSON.stringify(usersData));

        // Reset input sau khi dang ky thanh cong

        email.value = "";
        userName.value = "";
        password.value = "";

        // alert dang ky thanh cong va chuyen trang

        alertSuccess.style.display = "block";
        setTimeout(() => {
            alertSuccess.style.display = "none";
            window.location.href = "../index.html";
        }, 1500);
    }
};

// =========== tat error-alert ============

errorButton.onclick = function () {
    alertError.style.display = "none";
    // xoa class show-alert-error di de hien thi logo va h1
    document.body.classList.remove("show-alert-error");
};

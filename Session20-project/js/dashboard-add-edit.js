// =========== 1. Khai bao va lay du lieu tu localStorage ============

let usersData = JSON.parse(localStorage.getItem("usersData")) || [];
//lay chi so index cua phan tu khi edit
let editIndex = localStorage.getItem("editIndex");
editIndex = editIndex !== null ? Number(editIndex) : null;

// =========== 2. Lay form va input ============

let addEditForm = document.getElementById("add-edit-form");
let userCode = document.getElementById("id");
let userName = document.getElementById("username");
let userEmail = document.getElementById("email");
let userPassword = document.getElementById("password");
let userRole = document.getElementById("role");
let userBirthday = document.getElementById("birthday");
let userDescription = document.getElementById("description");

// ================================= Phan ADD/EDIT ==================================

// ===========3. Khi form o che do Add user thi tao id tu dong ============

if (userCode && editIndex === null) {
    userCode.value = generateUserId();
}

// ham tao id duy nhat, tang dan
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

// ===========4. Validate form ============

function validateForm(data) {
    let valid = true;

    if (!data.username.trim()) {
        showError(userName, "Username is required");
        valid = false;
    } else {
        clearError(userName);
    }

    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!data.email.trim()) {
        showError(userEmail, "Email is required");
        valid = false;
    } else if (!emailRegex.test(data.email)) {
        showError(userEmail, "Invalid email format");
        valid = false;
    } else {
        clearError(userEmail);
    }

    let passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!data.password.trim()) {
        showError(userPassword, "Password is required");
        valid = false;
    } else if (!passRegex.test(data.password)) {
        showError(
            userPassword,
            "Password must be at least 8 characters long and contain uppercase letters, lowercase letters, and numbers"
        );
        valid = false;
    } else {
        clearError(userPassword);
    }

    if (!data.birthday) {
        showError(userBirthday, "Birthday is required");
        valid = false;
    } else {
        clearError(userBirthday);
    }

    return valid;
}

// ===========5. Hien thi loi ============

function showError(input, message) {
    let formGroup = input.parentElement;
    let error = formGroup.querySelector(".error-message");
    error.textContent = message;
    error.style.display = "block";
}

// ===========6. Xoa loi ============

function clearError(input) {
    let formGroup = input.parentElement;
    let error = formGroup.querySelector(".error-message");
    error.textContent = "";
    error.style.display = "none";
}

// ===========7. Submit form ============

if (addEditForm) {
    addEditForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let checkedStatus = document.querySelector(
            'input[name="status"]:checked'
        );
        let userStatus = checkedStatus.value === "active" ? true : false;

        let formData = {
            id: Number(userCode.value),
            username: userName.value,
            email: userEmail.value,
            password: userPassword.value,
            role: userRole.value,
            birthday: userBirthday.value,
            status: userStatus,
            description: userDescription.value,
        };

        if (!validateForm(formData)) return;

        let isEmailExist = false;

        for (let i = 0; i < usersData.length; i++) {
            // kiem tra email co trung hay khong, nhung khong so sanh voi user dang chinh sua
            if (usersData[i].email === formData.email && i !== editIndex) {
                isEmailExist = true;
                break;
            }
        }

        if (isEmailExist) {
            showError(userEmail, "Email already exists");
            return;
        }

        if (editIndex !== null) {
            usersData[editIndex] = formData;
            localStorage.removeItem("editIndex");
            showToast("User updated successfully!");
        } else {
            usersData.push(formData);
            showToast("User added successfully!");
        }

        localStorage.setItem("usersData", JSON.stringify(usersData));

        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1500);
    });

    // =========== Neu o che do edit ============
    if (editIndex !== null && usersData[editIndex]) {
        let user = usersData[editIndex];
        // doi ten tieu do form va ten nut submit
        document.getElementById("form-title").textContent = "Edit user";
        document.getElementById("submit-btn").textContent = "Save";
        // do du lieu nguoi dung chinh sua lay tu usersData dien san len form edit
        userCode.value = user.id;
        userName.value = user.username;
        userEmail.value = user.email;
        userPassword.value = user.password;
        userRole.value = user.role;
        userBirthday.value = user.birthday;
        document.querySelector(
            `input[name="status"][value=${
                user.status ? "active" : "deactivate"
            }]`
        ).checked = true;
        userDescription.value = user.description;
        // =========== Neu o che do add ============
    } else {
        document.getElementById("form-title").textContent = "Add new user";
        document.getElementById("submit-btn").textContent = "Add +";
    }
}

// ===========8. Xu ly nut Back ============

function handleBack() {
    localStorage.removeItem("editIndex");
    window.location.href = "dashboard.html";
}

// ================================= Phan DASHBOARD ==================================

let displayedUsers = [...usersData];

// ===========9. Render bang ============

let tbody = document.getElementById("tbody");
let itemsPerPage = 5;
let currentPage = 1;

function renderTable(users = displayedUsers, page = 1) {
    if (!tbody) return;
    tbody.innerHTML = "";

    let start = (page - 1) * itemsPerPage;
    let end = start + itemsPerPage;
    let pageUsers = users.slice(start, end);

    if (pageUsers.length === 0) {
        let tr = document.createElement("tr");
        tr.innerHTML = `<td colspan="7" style="text-align:center; color: #667085; font-style: italic;">No users found</td>`;
        tbody.appendChild(tr);
        renderPagination(users.length, page);
        return;
    }

    pageUsers.forEach((user, i) => {
        let realIndex = (page - 1) * itemsPerPage + i;
        let statusClass = user.status ? "status-active" : "status-deactivate";
        let statusText = user.status ? "Active" : "Deactivate";

        let tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${user.id}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.role}</td>
            <td>${user.birthday}</td>
            <td>
                <span class="${statusClass} status-wrapper">
                    <i class="fa-solid fa-circle"></i>
                    <span>${statusText}</span>
                </span>
            </td>
            <td class="action-icons">
                <i class="delete-icon fa-regular fa-trash-can" onclick="deleteUser(${realIndex})"></i>
                <i class="edit-icon fa-solid fa-pencil" onclick="editUser(${realIndex})"></i>
            </td>
        `;
        tbody.appendChild(tr);
    });

    renderPagination(users.length, page);
}

// ===========10. Phan trang ============

function renderPagination(totalItems, currentPage) {
    let pagination = document.querySelector("#pagination");
    if (!pagination) return;

    let totalPages = Math.ceil(totalItems / itemsPerPage);
    let paginationHTML = "";

    // nut previous
    paginationHTML += `<button id="prev-page" ${
        currentPage === 1 ? "disabled" : ""
    }>&larr;</button>`;

    // cac nut so trang
    for (let i = 1; i <= totalPages; i++) {
        let activeClass = i === currentPage ? "active" : "";
        paginationHTML += `<button class="page-number ${activeClass}" data-page="${i}">${i}</button>`;
    }

    // nut next
    paginationHTML += `<button id="next-page" ${
        currentPage === totalPages ? "disabled" : ""
    }>&rarr;</button>`;

    pagination.innerHTML = paginationHTML;

    document.querySelectorAll(".page-number").forEach((btn) => {
        btn.addEventListener("click", () => {
            currentPage = Number(btn.dataset.page);
            renderTable(displayedUsers, currentPage);
        });
    });

    document.getElementById("prev-page")?.addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            renderTable(displayedUsers, currentPage);
        }
    });

    document.getElementById("next-page")?.addEventListener("click", () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderTable(displayedUsers, currentPage);
        }
    });
}

// ===========11. Edit ============

function editUser(index) {
    localStorage.setItem("editIndex", index);
    window.location.href = "add-edit.html";
}
// ===========12. Delete ============

function deleteUser(index) {
    const confirmBox = document.getElementById("confirm-box");
    const yesButton = document.getElementById("confirm-yes");
    const noButton = document.getElementById("confirm-no");

    confirmBox.style.display = "flex";

    yesButton.onclick = function () {
        usersData.splice(index, 1);
        displayedUsers = [...usersData];
        localStorage.setItem("usersData", JSON.stringify(usersData));
        renderTable(displayedUsers, currentPage);
        showToast("User deleted successfully!");
        confirmBox.style.display = "none";
    };

    noButton.onclick = function () {
        confirmBox.style.display = "none";
    };
}

// ===========13. Toast thong bao add/edit/delete thanh cong ============

function showToast(message) {
    let toast = document.getElementById("toast");
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");
    toast.classList.remove("hidden");

    setTimeout(() => {
        toast.classList.remove("show");
        toast.classList.add("hidden");
    }, 1500);
}

// ===========14. Search ============

document.addEventListener("DOMContentLoaded", () => {
    renderTable(displayedUsers, currentPage);

    let searchInput = document.getElementById("searchInput");
    let searchButton = document.querySelector(".search-btn");

    function handleSearch() {
        let keyword = searchInput.value.trim().toLowerCase();
        displayedUsers = keyword
            ? usersData.filter((user) =>
                  user.username.toLowerCase().includes(keyword)
              )
            : [...usersData];

        currentPage = 1;
        renderTable(displayedUsers, currentPage);
        searchInput.value = "";
    }

    if (searchButton) {
        searchButton.addEventListener("click", handleSearch);
    }

    if (searchInput) {
        searchInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") handleSearch();
        });
    }
});

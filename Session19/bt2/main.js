let courses = JSON.parse(localStorage.getItem("courses_data")) || [];

function saveToLocalStorage() {
    localStorage.setItem("courses_data", JSON.stringify(courses));
}

function getNextId() {
    return courses.length ? Math.max(...courses.map(c => c.id)) + 1 : 1;
}

let tbody = document.getElementById('tbody');

function showData() {
    if (courses.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align: center;">Không có dữ liệu</td></tr>`;
        return;
    }

    tbody.innerHTML = courses.map((el, index) => `
        <tr>
            <td>${index + 1}</td>
            <td>${el.content}</td>
            <td>${el.dueDate}</td>
            <td>${el.status}</td>
            <td>${el.assignedTo}</td>
            <td class="action-buttons">
                <button onclick="showEdit(${el.id})">Sửa</button>
                <button class="btn-delete" onclick="handleDelete(${el.id})">Xóa</button>
            </td>
        </tr>
    `).join('');

    form.querySelector('button').innerText = 'Submit';
}

document.addEventListener("DOMContentLoaded", showData);

let form = document.getElementById('form');
form.onsubmit = function (e) {
    e.preventDefault();
    let id = Number(form.courseId.value);
    let content = form.content.value.trim();
    let dueDate = form.dueDate.value.trim();
    let status = form.status.value.trim();
    let assignedTo = form.assignedTo.value.trim();

    const index = courses.findIndex(el => el.id === id);

    if (index !== -1) {
        courses[index] = { id, content, dueDate, status, assignedTo };
        form.querySelector('button').innerText = 'Submit';
        form.courseId.value = '';
    } else {
        let newId = getNextId(); 
        courses.push({ id: newId, content, dueDate, status, assignedTo });
    }

    saveToLocalStorage();
    showData();
    form.reset();
};

function handleDelete(id) {
    if (confirm("Bạn có chắc chắn muốn xóa mục này?")) {
        courses = courses.filter(el => el.id !== id);
        saveToLocalStorage();
        showData();
    }
}

function showEdit(id) {
    let edit = courses.find(el => el.id === id);
    if (edit) {
        form.courseId.value = edit.id;
        form.content.value = edit.content;
        form.dueDate.value = edit.dueDate;
        form.status.value = edit.status;
        form.assignedTo.value = edit.assignedTo;
        form.querySelector('button').innerText = 'Update';
    }
}

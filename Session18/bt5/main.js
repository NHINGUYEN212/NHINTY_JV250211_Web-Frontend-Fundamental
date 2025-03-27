let students = JSON.parse(localStorage.getItem("students")) || [];

function saveToLocalStorage() {
    localStorage.setItem("students", JSON.stringify(students));
}

function addStudent() {
    let name = document.getElementById("name").value.trim();
    let age = document.getElementById("age").value.trim();
    let className = document.getElementById("class").value.trim();

    if (!name || !age || !className || isNaN(age) || age <= 0) {
        alert("Vui lòng nhập đầy đủ thông tin hợp lệ!");
        return;
    }

    let id = students.length ? students[students.length - 1].id + 1 : 1;

    let student = { id, name, age: Number(age), className };
    students.push(student);
    
    saveToLocalStorage();
    showStudents();
    
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("class").value = "";
}

function showStudents(list = students) {
    let str = list.map((student, index) => `
        <tr>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.className}</td>
            <td>
                <button class="update-btn" onclick="updateStudent(${index})">Sửa</button>
                <button class="remove-btn" onclick="removeStudent(${index})">Xóa</button>
            </td>
        </tr>
    `).join("");

    document.getElementById("list").innerHTML = str;
}

function removeStudent(index) {
    if (confirm("Bạn có muốn xóa hay không?")) {
        students.splice(index, 1);
        saveToLocalStorage();
        showStudents();
    }
}

function updateStudent(index) {
    let newName = prompt("Nhập tên mới", students[index].name);
    let newAge = prompt("Nhập tuổi mới", students[index].age);
    let newClass = prompt("Nhập tên lớp mới", students[index].className);

    if (!newName || !newAge || !newClass || isNaN(newAge) || newAge <= 0) {
        alert("Thông tin không hợp lệ!");
        return;
    }

    students[index] = { ...students[index], name: newName, age: Number(newAge), className: newClass };

    saveToLocalStorage();
    showStudents();
}

function findStudent() {
    let keyword = document.getElementById("search").value.toLowerCase();
    let result = students.filter(student => student.name.toLowerCase().includes(keyword));
    showStudents(result);
}

showStudents();
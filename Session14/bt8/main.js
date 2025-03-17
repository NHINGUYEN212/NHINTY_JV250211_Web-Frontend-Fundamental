let employees = [];

function addEmployee() {
    let id;
    do {
        id = prompt("Nhập ID nhân viên (ID không được trùng):");
        if (employees.some(employee => employee.id === id)) {
            alert("ID đã tồn tại, vui lòng nhập lại.");
        }
    } while (employees.some(employee => employee.id === id));

    let name = prompt("Nhập tên nhân viên:");

    let position = prompt("Nhập chức vụ nhân viên:");

    let salary;
    do {
        salary = Number(prompt("Nhập mức lương nhân viên (phải là số dương):"));
        if (isNaN(salary) || salary <= 0) {
            alert("Lương phải là số dương hợp lệ! Vui lòng nhập lại.");
        }
    } while (isNaN(salary) || salary <= 0);

    employees.push({ id, name, position, salary });
    alert(`Nhân viên ${name} đã được thêm thành công!`);
}

function displayEmployees() {
    if (employees.length === 0) {
        alert("Danh sách nhân viên trống.");
        return;
    }
    let list = "Danh sách nhân viên:\n";
    employees.forEach(employee => {
        list += `ID: ${employee.id}, Tên: ${employee.name}, Chức vụ: ${employee.position}, Lương: ${employee.salary}\n`;
    });
    alert(list);
}

function searchEmployee() {
    let keyword = prompt("Nhập tên nhân viên cần tìm:").toLowerCase();
    let result = employees.filter(employee =>
        employee.name.toLowerCase().includes(keyword));
    
    if (result.length ===0) {
        alert(`Không tìm thấy nhân viên với từ khóa: ${keyword}.`);
    } else {
        result.forEach(employee =>
        alert(`Kết quả tìm kiếm:
ID: ${employee.id}, Tên: ${employee.name}, Chức vụ: ${employee.position}, Lương: ${employee.salary}`));   
    }
}

function updateEmployee() {
    let id = prompt("Nhập ID nhân viên cần cập nhật:");
    let employee = employees.find(employee => employee.id === id);

    if (employee) {
        employee.name = prompt("Nhập tên mới (hoặc để trống để giữ nguyên):") || employee.name;
        employee.position = prompt("Nhập chức vụ mới (hoặc để trống để giữ nguyên):") || employee.position;

        let newSalary;
    do {
        let salaryInput = prompt("Nhập mức lương mới (hoặc để trống để giữ nguyên):");
        if (salaryInput === "") {
            newSalary = employee.salary;
            break;
        }
        newSalary = Number(salaryInput);
        if (isNaN(newSalary) || newSalary <= 0) {
            alert("Lương phải là số dương hợp lệ! Vui lòng nhập lại.");
        }
    } while (isNaN(newSalary) || newSalary <= 0);
        employee.salary = newSalary;

        alert("Cập nhật thông tin nhân viên thành công!");
    } else {
        alert(`Không tìm thấy nhân viên với ID: ${id}.`);
    }
}

function deleteEmployee() {
    let id = prompt("Nhập ID nhân viên cần xóa:");
    let index = employees.findIndex(employee => employee.id === id);

    if (index === -1) {
        alert(`Không tìm thấy nhân viên với ID: ${id}.`);
        return;
    }
    employees.splice(index, 1);
    alert(`Nhân viên có ID: ${id} đã được xóa thành công!`);
}

function averageSalary() {
    if (employees.length === 0) {
        alert("Không có nhân viên để tính lương trung bình.")
        return;
    }
    let avgSalary = employees.reduce((sum, employee) =>
        sum + employee.salary, 0) / employees.length;
    alert(`Mức lương trung bình của nhân viên: ${avgSalary.toFixed(2)}`);
}

function run() {

    let exitProgram = false;

    while(!exitProgram) {

        let choice = prompt("Quản lý danh sách nhân viên:\n1. Thêm nhân viên mới\n2. Hiển thị danh sách nhân viên\n3. Tìm kiếm nhân viên theo tên\n4. Cập nhật thông tin nhân viên theo ID\n5. Xóa nhân viên theo ID\n6. Tính lương trung bình của nhân viên\n7. Thoát chương trình\nNhập lựa chọn của bạn:");

        switch(choice) {
            case "1":
                addEmployee();
                break;
            case "2":
                displayEmployees();
                break;
            case "3":
                searchEmployee();
                break;
            case "4":
                updateEmployee();
                break;
            case "5":
                deleteEmployee();
                break;
            case "6":
                averageSalary();
                break;
            case "7":
                exitProgram = true;
                break;
            default:
                alert("Lựa chọn không hợp lệ. Vui lòng nhập từ 1 đến 7.");
        }

    }
}

run();
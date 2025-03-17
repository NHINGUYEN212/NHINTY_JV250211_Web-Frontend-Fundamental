let students = [];

function addStudent(name, age, id) {
    students.push({ name, age, id });
    console.log(` Đã thêm sinh viên: ${name}`);
    
}

function showStudents() {
    if (students.length === 0) {
        console.log(`Danh sách sinh viên trống.`);
        return;
    }

    console.log(`Danh sách sinh viên:`);
    students.forEach(student => {
        console.log(`Tên: ${student.name}, Tuổi: ${student.age}, ID: ${student.id}`);
            
    })
}



function removeStudent(id) {
    const index = students.findIndex(student => student.id === id);
    if (index === -1) {
        console.log(` Không tìm thấy sinh viên có ID ${id}.`)
    } else {
        const removedStudent = students.splice(index, 1);
        console.log(`Đã xóa sinh viên: ${removedStudent[0].name}`);
    }
}

addStudent("Nguyễn Văn A", 18, "SV1");
addStudent("Nguyễn Văn B", 19, "SV2");
addStudent("Nguyễn Văn C", 20, "SV3");
showStudents();
removeStudent("SV2"); 
console.log(students);


// bai 1

const person = {
    name: "Nguyễn Văn A",
    age: 20,
    address: "Vĩnh Long",
    phone: "0903 456 789"
}

console.log("Tên:", person.name);
console.log("Tuổi:", person.age);
console.log("Địa chỉ:", person.address);
console.log("Số điện thoại:", person.phone);

// bai 2

const student = {
    id: 1,
    name: "Nguyễn Văn A",
    gender: "nam",
    age: 20,
    mark: 8
};

const newStudent = {
    id: 2,
    name: "Trần Thị B",
    gender: "nữ",
    age: 21,
    mark: 9
};

const students = [student, newStudent];

console.log("ID:", students[1].id);
console.log("Tên:", students[1].name);
console.log("Giới tính:", students[1].gender);
console.log("Tuổi:", students[1].age);
console.log("Điểm:", students[1].mark);

//  bai 3

let maxMarkStudent = students[0];
students.forEach(student => {
    if (student.mark > maxMarkStudent.mark) {
        maxMarkStudent = student;
    }
})

console.log("Học sinh có điểm cao nhất:");
console.log("ID:", maxMarkStudent.id);
console.log("Tên:",  maxMarkStudent.name);
console.log("Giới tính:", maxMarkStudent.gender);
console.log("Tuổi:",  maxMarkStudent.age);
console.log("Điểm:",  maxMarkStudent.mark);

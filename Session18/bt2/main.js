// // bai 1

let products = [
    { id: 1, name: 'Milk', count: 100 },
    { id: 2, name: 'Orange', count: 100 },
    { id: 3, name: 'Butter', count: 100 }
];

products.push({ id: 4, name: 'Cheese', count: 150 });
console.log(products);

products = products.filter(product => product.id !== 2);
console.log("Danh sách sản phẩm sau khi xóa id 2:", products);

let productToUpdate = products.find(product => product.id === 3);
if (productToUpdate) {
    productToUpdate.count = 0;
}

console.log("Danh sách sản phẩm sau khi cập nhật id 3:", products);

let searchKeyword = 'Butter'.toLocaleLowerCase();

let foundProducts = products.filter(product => 
    product.name.toLocaleLowerCase() === searchKeyword);

    if (foundProducts.length > 0) {
        console.log("Thông tin sản phẩm tìm thấy:");
        foundProducts.forEach(product => {
            console.log('id:', product.id, 'name:', product.name, 'count:', product.count);
        });
    } else {
        console.log("Không có dữ liệu bạn tìm kiếm");
    }

// bai 2

let courses = [
    { name: "HTML", complete: false },
    { name: "CSS", complete: false },
    { name: "Basic of JavaScript", complete: false },
    { name: "Node Package Manager (npm)", complete: false },
    { name: "Git", complete: false }
];

function displayCourses() {
    console.log('Danh sách khóa học:');
    courses.forEach((course, index) => {
        console.log(`${index + 1}. ${course.name}\nComplete: ${course.complete}`);
    })
};
function addCourse() {
    let name = prompt('Nhập tên khóa học mới:');
    let complete = confirm("Khóa học này đã hoàn thành chưa?\nNhấn Ok nếu đã hoàn thành, nhấn Cancel nếu chưa hoàn thành");
    courses.push({ name, complete });
    displayCourses();
};


function updateCourse() {
    let index = +prompt(`Nhập vị trí khóa học cần cập nhật (1 - ${courses.length}):`);
    index = index - 1;
    if (index < 0 || index >= courses.length) {
        alert('Vị trí không hợp lệ!');
    }
     let newName = prompt('Nhập tên mới:');
     if (newName) {
        courses[index].name = newName;
     }
     let newStatus = confirm("Khóa học này đã hoàn thành chưa?\nNhấn Ok nếu đã hoàn thành, nhấn Cancel nếu chưa hoàn thành");
    courses[index].complete = newStatus;
    displayCourses();
}

function deleteCourse() {
    let index = +prompt(`Nhập vị trí khóa học cần xóa (1 - ${courses.length}):`);
    index = index - 1;
    if (index < 0 || index >= courses.length) {
        alert('Vị trí không hợp lệ!');
    }
    courses.splice(index, 1);
    displayCourses();
}

while(true) {
    let choice = prompt("Nhập lựa chọn (C: Thêm, R: Xem, U: Cập nhật, D: Xóa, E: Thoát)");
    switch (choice) {
        case "C":
            addCourse();
            break;
        case "R":
            displayCourses();
            break;
        case "U":
            updateCourse();
            break;
        case "D":
            deleteCourse();
            break;
        case "E":
            alert("Cảm ơn bạn đã đến với Rikkei Academy!");
            break;

    }
    if (choice === "E") break;
}



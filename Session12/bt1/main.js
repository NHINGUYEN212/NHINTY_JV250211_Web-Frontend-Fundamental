// bai 1

let a = parseInt(prompt(`Nhập số a`));
let b = parseInt(prompt(`Nhập số b`));
if (b === 0) {
    alert(`Không thể chia cho 0`);
} else if (a % b ===0) {
    alert(`${a} chia hết cho ${b}`);
} else {
    alert(`${a} không chia hết cho ${b}`);
}

// bai 2

let age = parseInt(prompt(`Nhập tuổi của học sinh`));
age >= 15 ? alert(`Học sinh đủ điều kiện vào lớp 10`) : alert(`Học sinh không đủ điều kiện vào lớp 10`);

// bai 3

let number = parseInt(prompt(`Nhập một số nguyên`));
if (number > 0) {
    alert(`Số ${number} lớn hơn 0`);
} else if (number === 0) {
    alert(`Số ${number} bằng 0`);
} else {
    alert(`Số ${number} nhỏ hơn 0`);
}

// bai 4

let x = parseInt(prompt(`Nhập số thứ nhất`));
let y = parseInt(prompt(`Nhập số thứ hai`));
let z = parseInt(prompt(`Nhập số thứ ba`));
if (x >= y) {
    if (x >= z) {
        alert(`Số lớn nhất là: ${x}`);
    } else {
        alert(`Số lớn nhất là: ${z}`);
    }
} else {
    if (y >= z) {
        alert(`Số lớn nhất là: ${y}`);
    } else {
        alert(`Số lớn nhất là: ${z}`);
    }
}

// bai 5

let diemKiemTra = parseFloat(prompt(`Nhập điểm bài kiểm tra`));
let diemGiuaKy = parseFloat(prompt(`Nhập điểm thi giữa kỳ`));
let diemCuoiKy = parseFloat(prompt(`Nhập điểm thi cuối kỳ`));
let diemTrungBinh = (diemKiemTra + diemGiuaKy * 2 + diemCuoiKy * 3)/6;
let hocLuc;

if (diemTrungBinh >= 9) {
    hocLuc = `Xuất sắc`;
} else if (diemTrungBinh >= 8) {
    hocLuc = `Giỏi`;
} else if (diemTrungBinh >= 6.5) {
    hocLuc = `Khá`;
} else if (diemTrungBinh >= 5) {
    hocLuc = `Trung bình`;
} else {
    hocLuc = `Yếu`;
}
alert(`Học lực của học sinh là: ${hocLuc}`);
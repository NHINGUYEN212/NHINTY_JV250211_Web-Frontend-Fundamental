// // bai 1

let c = parseFloat(prompt(`Nhập nhiệt độ (°C)`));
let f = (c * 9 / 5) + 32;
alert(`${c}°C = ${f}°F`);

// // bai 2

let meter = parseFloat(prompt(`Nhập số mét`));
let feet = meter * 3.28084;
alert(`${meter} mét = ${feet.toFixed(2)} feet`);

// // bai 3

let a = parseFloat(prompt(`Nhập kích thước cạnh a của hình vuông`));
let squareArea = a * a;
alert(`Diện tích hình vuông: ${squareArea}`);

// // bai 4

let length = parseFloat(prompt(`Nhập kích thước chiều dài`));
let width = parseFloat(prompt(`Nhập kích thước chiều rộng`));
let rectangleArea = length * width;
alert(`Diện tích hình chữ nhật: ${rectangleArea}`);

// // bai 5

let base = parseFloat(prompt(`Nhập kích thước cạnh kề a`));
let height = parseFloat(prompt(`Nhập kích thước cạnh kề b`));
let rightTriangleArea = (base * height) / 2;
alert(`Diện tích tam giác vuông: ${rightTriangleArea}`);

// // bai 6
// // Ax+B=0

let A1 = parseFloat(prompt('Nhập A:'));
let B1 = parseFloat(prompt('Nhập B:'));
if (A1 === 0) {
    if (B1 === 0) {
        console.log('Phương trình có vô số nghiệm');
    } else {
        console.log('Phương trình vô nghiệm');
    }
} else {
    let x = -B1 / A1;
    alert(`Nghiệm của phương trình: x = ${x}`);
}

// bai 7
// Ax^2+Bx+C=0

let A2 = parseFloat(prompt('Nhập A'));
let B2 = parseFloat(prompt('Nhập B'));
let C2 = parseFloat(prompt('Nhập C'));

if (A2 === 0) {
    if (B2 === 0) {
        alert(C2 === 0 ? 'Phương trình có vô số nghiệm' : 'Phương trình vô nghiệm');
    } else {
        alert(`Nghiệm của phương trình: x = ${-C2 / B2}`);
    }
} else {
    let delta = B2 * B2 - 4 * A2 * C2;
    if (delta > 0) {
        let x1 = (-B2 + Math.sqrt(delta)) / (2 * A2);
        let x2 = (-B2 - Math.sqrt(delta)) / (2 * A2);
        alert(`Phương trình có hai nghiệm phân biệt: x1 = ${x1}, x2 = ${x2}`);
    } else if (delta === 0) {
        let x3 = -B2 / (2 * A2);
        alert(`Phương trình có nghiệm kép: x = ${x3}`);
    } else {
        alert('Phương trình vô nghiệm');
    }
}

// bai 8

let age = parseInt(prompt('Nhập số tuổi'));
if (age > 0 && age < 120) {
    alert('Đây là số tuổi của một người');
} else {
    alert('Đây không phải là số tuổi của một người');
}

// bai 9

let side1 = parseFloat(prompt('Nhập cạnh a'));
let side2 = parseFloat(prompt('Nhập cạnh b'));
let side3 = parseFloat(prompt('Nhập cạnh c'));

if (side1 > 0 && side2 > 0 && side3 > 0) {
    if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
        alert('Ba số này có thể tạo thành một tam giác');
    } else {
        alert('Ba số này không thể tạo thành một tam giác');
    }
} else {
    alert('Các cạnh phải lớn hơn 0');
}


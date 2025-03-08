let a = parseFloat(prompt(`Nhập số thứ nhất`));
let b = parseFloat(prompt(`Nhập số thứ hai`));
let c = parseFloat(prompt(`Nhập số thứ ba`));
let max;
if (a >= b && a >= c) {
    max = a;
} else if (b >=a && b >= c) {
    max = b;
} else {
    max = c;
}
alert(`Số lớn nhất là: ${max} `);
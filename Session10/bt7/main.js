let math = parseFloat(prompt(`Nhập điểm môn toán`));
let physics = parseFloat(prompt(`Nhập điểm môn lý`));
let chemistry = parseFloat(prompt(`Nhập điểm môn hóa`));
let average = (math + physics + chemistry) / 3;
alert(`Điểm trung bình là: ${average}`);
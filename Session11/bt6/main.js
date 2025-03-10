let weight = parseFloat(prompt(`Nhập cân nặng (kg)`));
let height = parseFloat(prompt(`Nhập chiều cao (m)`));
let bmi = weight / (height * height)
let category;

if (bmi.toFixed(1) < 18.5) {
    category = `Cân nặng thấp (gầy)`;
} else if (bmi.toFixed(1) >= 18.5 && bmi.toFixed(1) <= 24.9 ) {
    category = `Bình thường`;
} else if (bmi.toFixed(1) >= 25 && bmi.toFixed(1) <= 29.9) {
    category = `Tiền béo phì`;
} else if (bmi.toFixed(1) >= 30 && bmi.toFixed(1) <= 34.9) {
    category = `Béo phì độ I`;
} else if (bmi.toFixed(1) >= 35 && bmi.toFixed(1) <= 39.9) {
    category = `Béo phì độ II`;
} else {
    category = `Béo phì độ III`;
} 
alert(`Chỉ số BMI của bạn là: ${bmi.toFixed(1)}\nPhân loại: ${category}`);


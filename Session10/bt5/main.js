let firstNumber = parseInt(prompt(`Nhập số thứ nhất`));
let secondNumber = parseInt(prompt(`Nhập số thứ hai`));

if (firstNumber % secondNumber === 0) {
    alert(`${firstNumber} là bội số của ${secondNumber}`);
} else {
    alert(`${firstNumber} không phải là bội số của ${secondNumber}`);
}

let a = parseFloat(prompt(`Mời bạn nhập vào số a`));
let b = parseFloat(prompt(`Mời bạn nhập vào số b`));
let operator = prompt(`Mời bạn nhập vào các phép tính (+, -, *, /)`);
let result;

switch (operator) {
    case `+`:
        result = a + b;
        break;
    case `-`:
        result = a- b;
        break;
    case `*`:
        result = a * b;
        break;
    case `/`:
        if (b !== 0) {
            result = a / b;
        } else {
            result = `Không thể chia cho 0`;
        }
        break;
    default:
        result = `Phép toán không hợp lệ!`;
}
alert(`Kết quả của phép tính trên: ${a} ${operator} ${b} = ${result}`);
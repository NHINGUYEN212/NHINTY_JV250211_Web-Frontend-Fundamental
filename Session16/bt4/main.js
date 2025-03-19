let number = +prompt("Nhập 1 số nguyên bất kỳ");
function isEven(number) {
    return number % 2 === 0;
}
if (isEven(number)) {
    alert(`Số ${number} là số chẵn.`)
} else {
    alert(`Số ${number} là số lẻ.`)
}


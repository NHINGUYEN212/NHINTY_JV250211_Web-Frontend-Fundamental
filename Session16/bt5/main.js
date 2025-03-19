let number = +prompt("Nhập vào 1 số bất kỳ để kiểm tra có phải là số nguyên tố hay không?");
function isPrime(number) {
    if (number < 2) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}
if (isPrime(number)) {
    alert(`${number} là số nguyên tố.`)
} else {
    alert(`${number} không phải là số nguyên tố.`)
}
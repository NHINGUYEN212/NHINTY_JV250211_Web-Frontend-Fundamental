let numberInput = prompt(`Nhập dãy số cách nhau bởi dấu cách`);
let numberArray = numberInput.split(" ").map(Number);
let minNumber = Math.min(...numberArray);
alert(`Số nhỏ nhất trong dãy là: ` + minNumber);
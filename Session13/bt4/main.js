let numberInput = prompt(`Nhập dãy số cách nhau bởi dấu cách`);
let numberArray = numberInput.split(" ").map(Number);
let maxNumber = Math.max(...numberArray);
alert(`Số lớn nhất trong dãy là: ` + maxNumber);
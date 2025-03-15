let numberArray = [];
for (let i = 0; i < 20; i++) {
    numberArray.push(Math.floor(Math.random()*100));
}
console.log(numberArray);

let k = Number(prompt(`Nhập một số nguyên để kiểm tra`));
let count = 0;
for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] === k) {
        count++;
    }
}
count === 0 ? alert(`Số ${k} không có trong mảng`) : alert(`Số ${k} xuất hiện ${count} lần trong mảng.`);
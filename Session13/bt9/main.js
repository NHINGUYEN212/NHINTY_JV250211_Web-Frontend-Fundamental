let numberArray = [];
for (let i = 0; i < 20; i++) {
    numberArray.push(Math.floor(Math.random() * 100));
}
console.log(numberArray);

let result = [];
let target;
while (true) {
    target = prompt(`Nhập một số nguyên`);
    target = Number(target);
   if (!isNaN(target) && Number.isInteger(target)) {
        break;
   } else {
        alert(`Vui lòng nhập một số nguyên hợp lệ!`);
   }
}

for (let i = 0; i < numberArray.length; i++) {
    for (let j = i + 1; j < numberArray.length; j++) {
        if (numberArray[i] + numberArray[j] === target) {
            result.push(`[${numberArray[i]}, ${numberArray[j]}]`);
        }
    }
}
if (result.length === 0) {
    alert(`Không tìm thấy cặp số nào có tổng bằng ${target}`);
} else {
    alert(JSON.stringify(result));
}
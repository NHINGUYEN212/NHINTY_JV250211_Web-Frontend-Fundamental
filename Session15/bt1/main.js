// // bai 1

let numbers1 = [2, 4, 15, 6, 40, 37, 9, 50, 31, 21];
let count1 = 0;
for (let i = 0; i < numbers1.length; i++) {
    if (numbers1[i] >= 10) {
        count1++;
    }
}
console.log(count1);

// // bai 2

let numbers2 = [6, -4, 25, 10, 70, 57, -90, 20, -39, 61];
let maxValue = numbers2[0];
let maxIndex = 0;
for (let i = 1; i < numbers2.length; i++) {
    if (numbers2[i] > maxValue) {
        maxValue = numbers2[i];
        maxIndex = i;
    }
} 
console.log(`Số lớn nhất là ${maxValue} và vị trí index là ${maxIndex}`);

// // bai 3

const numbers3 = [10, -9, 45, 10, 80, 57, -90, 20, -39, 61];
const sum = numbers3.reduce((accumulator, number) => accumulator + number, 0);
const max = Math.max(...numbers3);
const average = sum / numbers3.length;

console.log(`Số lớn nhất là ${max} và giá trị trung bình của mảng là ${average}`);

// bai 4

const number4 = [1, 2 , 3, 4, 5, 6];
number4.reverse();
console.log("Mảng sau khi đảo ngược:", number4);

// bai 5

function countNegativeNumbers(string) {
    let count5 = 0;
    for (let i = 0; i < string.length - 1; i++) {
        if (string[i] === "-" && !isNaN(string[i+1])) {
            count5++;
            i++;
        }
    }
    return count5;
}
console.log(countNegativeNumbers("ab12-5-e-456-67-g45"));


// // bai 6

const numbers6 = [5, 12, 8, -4, 23, 7, 15, 30, -10, 2];
const inputNumber = Number(prompt("Nhập một số nguyên để kiểm tra:"));
if (numbers6.includes(inputNumber)) {
    console.log(`Number ${inputNumber} is in the array`);
} else {
    console.log(`Number ${inputNumber} is not in the array`);
    
}

// // bai 7

const numbers7 = [10, -9, 45, 10, 80, 57, -90, 20, -39, 61];
numbers7.sort ((a, b) => b - a);
console.log("Mảng sau khi sắp xếp giảm dần:", numbers7);

// // bai 8

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let b = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let c = a.concat(b);
console.log(c);



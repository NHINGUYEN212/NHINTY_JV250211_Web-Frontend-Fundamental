// // bai 1

let arr1 = ['c', 's', 'c', '2', '6', '1'];
let numbers1 = arr1.filter(character => !isNaN(character));
let string1 = arr1.filter(character => isNaN(character));

let result1 = numbers1.concat(string1).join("");
console.log(result1);

// // bai 2

let arr2 = ['a', '2', 'b', '4', 'c', '5', '7', 'd', '9', 'e']; 
let numbers2 = arr2.filter(character => !isNaN(character));
let count2 = numbers2.length;

console.log(`Số ký tự số trong mảng: ${count2}`);

// bai 3

let string3 = "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
let count3 = 0;
for (let i = 0; i < string3.length; i++) {
    if (string3[i] !== " ") {
        count3++;
    }
}
console.log(count3);

// bai 4

let str1 = prompt("Nhập chuỗi thứ nhất:");
let str2 = prompt("Nhập chuỗi thứ hai:");

if (str1 === str2) {
    alert("Hai chuỗi giống nhau.");
} else {
    alert("Hai chuỗi khác nhau.");
}

// bai 5

let arr5 = prompt("Nhập mảng ký tự (cách nhau bằng dấu phẩy):").split(",")
let newArr5 = arr5.map(character => character === "-" ? "_" : character);
console.log("Mảng sau khi thay thế:", newArr5);

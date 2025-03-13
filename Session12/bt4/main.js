// // bai 1

for (let i = 1; i <= 100; i++) {
    console.log(i);
    if (i === 99) {
        alert(`Đã hoàn thành!`);
    }
}

// // bai 2

let temperature = parseFloat(prompt(`Nhập nhiệt độ hiện tại`));
if (temperature > 100) {
    alert(`Nhiệt độ quá cao! Hãy giảm nhiệt độ.`);
} else if (temperature < 20) {
    alert(`Nhiệt độ quá thấp! Hãy tăng nhiệt độ.`);
} else {
    alert(`Nhiệt độ phù hợp.`)
}

// // bai 3

let a = 0;
let b = 1;
let c;

for (let i = 0; i < 20; i++) {
    console.log(a);
    c = a + b;
    a = b;
    b = c;
}

// bai 4

let A = 0;
let B = 1;
let C;
while (true) {
    if (A % 5 ===0 && A !== 0) {
        console.log(`Số Fibonacci đầu tiên chia hết cho 5 là: ${A}`);
        break;
    }
    C = A + B;
    A = B;
    B = C;
}

// bai 5

let d = 0;
let e = 1;
let f;
let sum = 0;

for (let j = 0; j < 20; j++) {
    sum = sum + d;
    f = d + e;
    d = e;
    e = f;
}
console.log(`Tổng của 20 số Fibonacci đầu tiên là: ${sum}`);

// bai 6

let sum7 = 0;
let count7 = 0;
let num7 = 7;

while (count7 < 30) {
    sum7 = sum7 + num7;
    count7++;
    num7 = num7 + 7;
}

console.log(`Tổng của 30 số chia hết cho 7 đầu tiên là: ${sum7}`);

// bai 7

for (let h = 1; h <= 100; h++) {
    if (h % 3 === 0 && h % 5 === 0) {
        console.log(`FizzBuzz`); 
    } else if (h % 3 === 0) {
        console.log(`Fizz`);  
    } else if (h % 5 === 0) {
        console.log(`Buzz`);
    } else {
        console.log(h);
    }
}

// bai 8

function playGame() {
    let min = Number(prompt(`Nhập số nhỏ nhất của khoảng đoán`));
    let max = Number(prompt(`Nhập số lớn nhất của khoảng đoán`));
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    let guess;

    while(true) {
        guess = Number(prompt(`Hãy đoán một số trong khoảng ${min} - ${max}`));
        if (guess === randomNumber) {
            alert(`Chúc mừng! Bạn đã đoán đúng!`);
            break;
        } else if (guess < randomNumber) {
            alert(`Số bạn đoán quá nhỏ. Hãy thử lại!`);
        } else {
            alert(`Số bạn đoán quá lớn. Hãy thử lại!`)
        }
    }
}
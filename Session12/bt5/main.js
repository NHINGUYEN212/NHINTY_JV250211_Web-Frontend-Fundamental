// // bai 1

let n = 15;
let a = 0;
let b = 1;
let c;

for (let i = 0; i < n; i++) {
    console.log(a);
    c = a + b;
    a = b;
    b = c;
}

// // bai 2

let N = 4;
let factorial = 1;
for (i = 1; i <= N; i++) {
    factorial = factorial * i;
}
console.log(`Giai thừa của ${N} là: ${factorial}`);

// bai 3

for (i = 1; i <= 5; i++) {
    for (j = 1; j <= i; j++) {
        document.write(`*`)
    }
    document.write(`<br>`);
}

document.write(`<br>`);

for (i = 5; i >= 1; i--) {
    for (j = 1; j <= i; j++) {
        document.write(`*`);
    }
    document.write(`<br>`);
}

document.write(`<br>`);

for (i = 1; i <= 5; i++) {
    for(j = 1; j <= 5 - i; j++) {
        document.write(`&nbsp;&nbsp;`);
    }
    for (h = 1; h <= i; h++) {
        document.write(`*`);
    }
    document.write(`<br>`);
}

document.write(`<br>`);

for (i = 5; i >= 1; i--) {
    for(j = 1; j <= 5 - i; j++) {
        document.write(`&nbsp;&nbsp;`);
    }
    for (h = 1; h <= i; h++) {
        document.write(`*`);
    }
    document.write(`<br>`);
}

// bai 4

document.write(`<br>`);

for (i = 1; i <= 7; i++) {
    for (j = 1; j <= 25; j++) {
        if (i === 1 || i ===7 || j === 1 || j ===25) {
            document.write(`*`);
        } else {
            document.write(`&nbsp;&nbsp;`);
        }
    }
    document.write(`<br>`);
}

// bai 5

let P = 10000000;
let m = 24;
let r = 0.01;
let A = P;
    for (let i = 1; i <= m; i++) {
        A = A * (1 + r); 
    }
console.log(`Tổng số tiền phải trả sau ${m} tháng là ${A.toFixed(2)}`);

let array =  [2, 6, 10, 15, 30, 47, 50, 56, 70, 89];
let numberInput = Number(prompt(`Nhập một số`));
if (array.includes(numberInput)) {
    alert(`Bingo`);
} else {
    alert(`Chúc bạn may mắn lần sau`);
}
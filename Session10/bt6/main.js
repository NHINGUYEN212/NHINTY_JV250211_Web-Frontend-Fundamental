let usd = parseFloat(prompt(`Nhập số tiền USD`));
const exchangeRate = 25000;
let vnd = usd * exchangeRate;
alert(`${usd} USD = ${vnd} VND`);
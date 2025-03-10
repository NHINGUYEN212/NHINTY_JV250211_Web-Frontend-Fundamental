function isLeapYear(year) {
    return (year % 4 ===0 && year % 100 !== 0 || year % 400 === 0);
}
let year = parseInt(prompt(`Nhập vào một năm`));

if (isLeapYear(year)) {
    alert(`${year} là năm nhuận.`);
} else {
    alert(`${year} không phải là năm nhuận.`);
}
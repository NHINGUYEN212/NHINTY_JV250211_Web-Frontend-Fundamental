let numberArray = [];
for (let i = 0; i < 20; i++) {
    numberArray.push(Math.floor(Math.random()*100));
}
console.log(numberArray);

let evenSum = 0;
let oddSum = 0;

 for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] % 2 === 0) {
        evenSum = evenSum + numberArray[i];
    } else {
        oddSum = oddSum + numberArray[i];
    }
 }
 alert(`Tổng số lẻ: ${oddSum}
Tổng số chẵn: ${evenSum}`);
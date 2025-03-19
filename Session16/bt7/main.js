function calculateSum(array) {
    return array.reduce((acc, cur) => acc + cur, 0);
}
const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [10, 20, 30, 40, 50];
const arr3 = [1, 3, 5, 7, 9];

console.log(calculateSum(arr1));
console.log(calculateSum(arr2));
console.log(calculateSum(arr3));

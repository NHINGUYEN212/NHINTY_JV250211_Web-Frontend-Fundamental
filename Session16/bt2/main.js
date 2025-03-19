

function findMinValue(arr) {
    if (arr.length === 0) {
        return "Mảng rỗng!";
    }
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];        }
    }
    return min;
}

const arr1 = [3, 5, 1, 8, -3, 7, 8];
const arr2 = [7, 12, 6, 9, 20, 56, 89];
const arr3 = [];
const arr4 = [0, 0, 0, 0, 0, 0];

console.log(findMinValue(arr1));
console.log(findMinValue(arr2));
console.log(findMinValue(arr3));
console.log(findMinValue(arr4));

function isPrime(number) {
    if (number < 2) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}

function sumPrimes(array) {
    return array.reduce((sum, number) => isPrime(number) ? sum + number : sum, 0);
}

const arr1 = [1, 2, 3, 4, 5, 6, 7];
const arr2 = [10, 11, 12, 13, 14];

console.log(sumPrimes(arr1));
console.log(sumPrimes(arr2));






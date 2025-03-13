function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

let count = 0, number = 2, primes = [];

while (count < 20) {
    if (isPrime(number)) {
        primes.push(number);
        count++;
    }
    number++;
}

alert(`20 số nguyên tố đầu tiên là: ${primes}`);
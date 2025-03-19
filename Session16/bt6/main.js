let string = prompt("Nhập vào 1 chuỗi muốn kiểm tra tính đối xứng.")

function isPalindrome(string) {
    for (let i = 0, j = string.length - 1; i < j; i++, j--) {
        if (string[i] !== string[j]){
            return false;
        }
    }
    return true;
}

if (isPalindrome(string)) {
    alert(`${string} là chuỗi đối xứng.`)
} else {
    alert(`${string} không phải là chuỗi đối xứng.`)
}
let arr = [1, 5, 10, "banana", "apple"];

arr.push(30, 35);
arr[arr.length] = "cherry";
arr.unshift(0);
arr.splice(3, 0, 60);
console.log(arr);

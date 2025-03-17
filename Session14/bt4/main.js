const original = {
    name: "Bob",
    age: 30
}

const copy = Object.assign({}, original);

copy.name = "Charlie";

console.log(original);
console.log(copy);



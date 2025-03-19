function capitalizeWords(string) {
return string.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

const string1 = "hello WORLD";
const string2 = "rIKKei acaDEMy"
console.log(capitalizeWords(string1));
console.log(capitalizeWords(string2));

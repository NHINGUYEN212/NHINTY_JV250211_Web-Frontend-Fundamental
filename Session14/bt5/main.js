const rectangle = {
    width: 10,
    height: 5,
    color: "blue"
}

for (let key in rectangle) {
    console.log(`${key}: ${rectangle[key]}`);
    
}

const area = rectangle.width * rectangle.height;
console.log(`Diện tích hình chữ nhật: ${area}`);

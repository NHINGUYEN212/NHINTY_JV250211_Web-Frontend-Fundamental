let englishWords = ['dog', 'cat', 'elephant', 'tiger', 'lion', 'rabbit', 'monkey', 'snake', 'bear', 'horse'];
let vietnameseWords = ['chó', 'mèo', 'voi', 'hổ', 'sư tử', 'thỏ', 'khỉ', 'rắn', 'gấu', 'ngựa'];
let result = false;
let searchWord = prompt(`Nhập từ tiếng Anh cần tra cứu`);


for (let i = 0; i < englishWords.length; i++) {
    if (englishWords[i] === searchWord) {
        alert(`Từ '${searchWord}' có nghĩa là: '${vietnameseWords[i]}'`);
        result = true;
        break;   
    }
}
if (!result) {
    alert(`Không tìm thấy từ '${searchWord}' trong từ điển.`);
}
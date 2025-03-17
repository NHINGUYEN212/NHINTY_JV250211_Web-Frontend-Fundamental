let books = [];

function addBook() {
    let id = prompt("Nhập ID sách:");
    let title = prompt("Nhập tên sách:");
    let author = prompt("Nhập tác giả:");
    let year = prompt("Nhập năm xuất bản:");

    books.push({ id, title, author, year });
    alert(`Đã thêm sách: ${title}`);
}

function displayBooks() {
    if (books.length ===0) {
        alert("Danh sách sách trống.");
        return;
    }
    let bookList = "Danh sách sách:\n";
    books.forEach(book => {
        bookList += `ID: ${book.id}, Tên: ${book.title}, Tác giả: ${book.author}, Năm xuất bản: ${book.year}.\n`;
    });
    alert(bookList);
}

 function searchBook() {
    let keyword = prompt("Nhập từ khóa tìm kiếm:").toLowerCase();
    let result = books.filter(book => book.title.toLowerCase().includes(keyword));
    if (result.length === 0) {
        alert("Không tìm thấy sách nào.");
        return;
    }
    result.forEach(book => {
        alert(`Kết quả tìm kiếm:
ID: ${book.id}, Tên: ${book.title}, Tác giả: ${book.author}, Năm xuất bản: ${book.year}`);
        
    })
 }

 function removeBook() {
    let id = prompt("Nhập ID sách cần xóa:");
    let index = books.findIndex(book => book.id === id);

    if (index === -1) {
        alert(`Không tìm thấy sách có ID ${id}.`);
        return;
    }
    let removedBook = books.splice(index, 1);
    alert(`Đã xóa sách: ${removedBook[0].title}`);
    
 }

 function run() {
    let exitProgram = false;

    while(!exitProgram) {
        let choice = prompt("Quản lý danh sách sách:\n1. Thêm sách\n2. Hiển thị danh sách\n3. Tìm kiếm sách\n4. Xóa sách\n5. Thoát\nNhập lựa chọn của bạn:")

        switch(choice) {
            case "1": 
                addBook();
                break;
            case "2":
                displayBooks();
                break;
            case "3":
                searchBook();
                break;
            case "4":
                removeBook();
                break;
            case "5":
                exitProgram = true;
                break;
            default:
                alert("Lựa chọn không hợp lệ. Vui lòng nhập từ 1 đến 5.");
            
        }
    }
 }
 run();

let userName = prompt(`Nhập tên người dùng`);

if (userName === `ADMIN`) {
    let password = prompt(`Nhập mật khẩu`);
    if (password === `TheMaster`) {
        alert(`Welcome`);
    } else if (password === null) {
        alert(`Cancelled`);
    } else {
        alert(`Wrong password`);
    }
} else if (userName === null) {
    alert(`Cancelled`);
} else {
    alert(`I Don't know you`);
}
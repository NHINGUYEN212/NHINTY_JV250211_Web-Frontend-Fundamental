let choice;
let fullName = ``;
let age = null;

    console.log('1. Nhập tên của bạn');
    console.log('2. Nhập tuổi của bạn');
    console.log('3. In tên và tuổi của bạn');
    console.log('4. In bảng cửu chương của một số');
    console.log('5. Kiểm tra số chẵn hay lẻ');
    console.log('6. Tính tổng các số từ 1 đến N');
    console.log('7. In các số trong một dãy');
    console.log('8. Kiểm tra số nguyên tố');
    console.log('9. In chuỗi đảo ngược');
    console.log('10. Thoát chương trình');

    while (choice !== 10) {

    choice = Number(prompt(`Mời bạn nhập lựa chọn (từ 1 đến 10)`));

    switch(choice) {
        case 1:
            fullName = prompt(`Mời bạn nhập tên đầy đủ`);
             break;
        case 2:
            age = Number(prompt(`Mời bạn nhập tuổi`))
             break;
        case 3:
            console.log(`Tên của bạn là: ${fullName || 'Chưa nhập tên'}`);
            console.log(`Tuổi của bạn là: ${age !== null ? age : 'Chưa nhập tuổi'}`);
             break;
        case 4:
            let A = Number(prompt(`Mời bạn nhập số cần in bảng cửu chương`));
            for (let  i = 1; i <= 10; i++) {
                console.log(`${A} * ${i} = ${A * i}`);
            }
             break;
        case 5:
            let num = Number(prompt(`Mời bạn nhập số để kiểm tra chẵn/lẻ `));
            console.log(num % 2 === 0 ? `Số chẵn` : `Số lẻ`);
             break;
        case 6:
            let N = Number(prompt('Nhập N: '));
            let sum = (N * (N + 1)) / 2;
            console.log('Tổng từ 1 đến ' + N + ' là ' + sum);
            break;
        case 7:
            let numbers = prompt('Mời bạn nhập dãy số (cách nhau bởi dấu cách)').split(' ');
            console.log('Dãy số của bạn là: ' + numbers.join(' '));
             break;
        case 8:
            let primeNum = Number(prompt('Mời bạn nhập số để kiểm tra số nguyên tố'));
            let isPrime = primeNum > 1;
            for (let i = 2; i <= Math.sqrt(primeNum); i++) {
                if (primeNum % i === 0) {
                    isPrime = false;
                    break;
                } 
            } 
            console.log(isPrime ? 'Là số nguyên tố' : 'Không phải số nguyên tố');
             break;
        case 9:
            let string = prompt('Mời bạn nhập chuỗi muốn đảo ngược');
            console.log('Chuỗi đảo ngược: ' + string.split('').reverse().join(''));
             break;
        default:
            console.log(`Lựa chọn không hợp lệ. Vui lòng thử lại!`);
        
    }
}

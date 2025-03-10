let date = parseInt(prompt(`Mời bạn nhập vào ngày sinh của bạn`));
let month = parseInt(prompt(`Mời bạn nhập vào tháng sinh của bạn`));
let zodiacSign;

switch (month) {
    case 1:
        zodiacSign = (date <= 19) ? `Capricorn` : `Aquarius`;
        break;
    case 2:
        zodiacSign = (date <= 18) ? `Aquarius` : `Pisces`;
        break;
    case 3:
        zodiacSign = (date <= 20) ? `Pisces` : `Aries`;
        break;
    case 4:
        zodiacSign = (date <= 19) ? `Aries` : `Taurus`;
        break;
    case 5:
        zodiacSign = (date <= 20) ? `Taurus` : `Gemini`;
        break;
    case 6:
        zodiacSign = (date <= 21) ? `Gemini` : `Cancer`;
        break;
    case 7:
        zodiacSign = (date <= 22) ? `Cancer` : `Leo`;
        break;
    case 8:
        zodiacSign = (date <= 22) ? `Leo` : `Virgo`;
        break;
    case 9:
        zodiacSign = (date <= 22) ? `Virgo` : `Libra`;
        break;
    case 10:
        zodiacSign = (date <= 22) ? `Libra` : `Scorpio`;
        break;
    case 11:
        zodiacSign = (date <= 21) ? `Scorpio` : `Sagittarius`;
        break;
    case 12:
        zodiacSign = (date <= 21) ? `Sagittarius` : `Capricorn`;
        break;
    default:
        zodiacSign = `Tháng không hợp lệ!`;
}
alert(`Cung hoàng đạo của bạn là: ${zodiacSign}`);
/*https://www.notion.so/Homework-1-141e3bc0e45c4036ad806e81e6c97909*/

const phone = prompt('Введите номер');

if (phone.length < 10 || phone.length > 12) {
    alert('Введено неверное число символов');
} else if ((phone.charAt(0) === '+') || (phone.charAt(0) === '7') || (phone.charAt(0) === '8') || (phone.charAt(0) === '9')) {
   alert(formatPhone(phone));
} else {
    alert('Введен неверный формат телефона', phone.charAt(0), phone);
}

function formatPhone(phone) {
    let phoneStart = 0;
    let phoneLen = phone.length;
    let formatPhone = '+7 ('

    if (phoneLen === 12) {
        phoneStart = 2;
    } else if (phoneLen === 11) {
        phoneStart = 1;
    }

    for (let i = phoneStart; i < phoneLen; i++) {
        if (i === (phoneStart + 3)) {
            formatPhone += ') ';
        }

        if (i === (phoneStart + 6) || i === (phoneStart + 8)) {
            formatPhone += '-';
        }

        formatPhone += phone.charAt(i);
    }

    return formatPhone;
}



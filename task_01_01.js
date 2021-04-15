/*https://www.notion.so/Homework-1-141e3bc0e45c4036ad806e81e6c97909*/

const inputChar = prompt('Введите букву');
const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';

function getCountChar(row, char) {
    let countChar = 0;

    for (let i = 0; i < row.length; i++) {
        if (char === row.charAt(i)) {
            countChar += 1;
        }
    }

    return countChar;
}

function getRow(firstRow, secondRow, char) {
    const countCharFirstRow = getCountChar(firstRow, char);
    const countCharSecondRow = getCountChar(secondRow, char);
    if (countCharFirstRow > countCharSecondRow) {
        alert('В первой строке больше букв "' + char + '"');
    }
    else if (countCharFirstRow < countCharSecondRow){
        alert('Во второй строке больше букв "' + char + '"');
    } else {
        alert('В каждой строке одинакове число букв "' + char + '"');
    }
}

if (!inputChar) {
    alert('Вы ничего не ввели');
} else {
    getRow(firstRow, secondRow, inputChar);
}

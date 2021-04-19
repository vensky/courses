/*https://www.notion.so/Homework-1-141e3bc0e45c4036ad806e81e6c97909*/

const inputChar = prompt('Введите букву');
const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';

function countedChar(row, char) {
    let counted = 0;

    for (let i = 0; i < row.length; i++) {
        if (row.charAt(i) === char) {
            counted++;
        }
    }

    return counted;
}

function getRow(firstRow, secondRow, char) {
    const countCharFirstRow = countedChar(firstRow, char);
    const countCharSecondRow = countedChar(secondRow, char);

    if (countCharFirstRow === countCharSecondRow) {
        return alert("Здесь одинаковое кол-во символа " + char);
    }

    return countCharFirstRow >= countCharSecondRow ? alert(firstRow) : alert(secondRow);
}

if (!inputChar) {
    alert('Вы ничего не ввели');
} else {
    getRow(firstRow, secondRow, inputChar);
}

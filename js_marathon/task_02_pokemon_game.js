const $logs = document.querySelector('.logs');

function $getElById(id) {
    return document.getElementById(id);
}

const $btn = $getElById('btn-kick');
const $btnFatal = $getElById('btn-fatal');

const character = {
    name: 'Pikachu',
    type: 'electric',
    weakness: ['fighting', 'water', 'some'],
    resisrance: ['steel'],
    hp: {
        current: 100,
        total: 100,
    },
    defaultHP: 100,
    damageHP: 100,
    elHP: $getElById('health-character'),
    elProgressbar: $getElById('progressbar-character'),
    changeHP: changeHP,
    renderHP: renderHP,
    renderHPLife: renderHPLife,
    renderProgressBarHP: renderProgressBarHP,
}

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: $getElById('health-enemy'),
    elProgressbar: $getElById('progressbar-enemy'),
    changeHP: changeHP,
    renderHP: renderHP,
    renderHPLife: renderHPLife,
    renderProgressBarHP: renderProgressBarHP,
}

kick($btn, 20);
kick($btnFatal, 50);

function init() {
    character.renderHP();
    enemy.renderHP();
}

function renderHP() {
    this.renderHPLife();
    this.renderProgressBarHP();
}

function renderHPLife() {
    this.elHP.innerText = this.damageHP + '/' + this.defaultHP;
}

function renderProgressBarHP() {
    this.elProgressbar.style.width = this.damageHP + '%';
}

function changeHP(count, person) {
    this.damageHP -= count;


        log = this === enemy ? generateLog(this, character) : generateLog(this, enemy);




    if (this.damageHP <= count) {
        this.damageHP = 0;
        alert(this.name + ' проиграл!');
        $btn.disabled = true;
        $btnFatal.disabled = true;
    }

    this.renderHP();
}

function random(num) {
    return Math.ceil(Math.random() * num);
}

function kick(btn, damage) {
    let clickCount = 0;

    btn.addEventListener('click', function() {
        character.changeHP(random(damage));
        enemy.changeHP(random(damage));
        if (clickCount <= 6) {
            clickCount++;
        }

        console.log(clickCount)
    });
  /*  console.log(clickCount);*/
}

function generateLog(firstPerson, secondPerson) {
    const logs = [
    `${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага.`,
    `${firstPerson.name} поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага.`,
    `${firstPerson.name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил.`,
    `${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар.`,
    `${firstPerson.name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника.`,
    `${firstPerson.name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар.`,
    `${firstPerson.name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар.`,
    `${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника`,
    `${firstPerson.name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника.`,
    `${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику.`
];
    /*return logs[random(logs.length) - 1];*/
    const $p = document.createElement('p');
    const randomLogs = logs[random(logs.length) - 1]

        $p.innerText = randomLogs;
        $logs.insertBefore($p, $logs.children[0]);
}

init();

const $btn = document.getElementById('btn-kick');
const $btnFatal = document.getElementById('btn-fatal');

const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar:document.getElementById('progressbar-character'),
}

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar:document.getElementById('progressbar-enemy'),
}

/*$btn.addEventListener('click', function() {
    changeHP(random(20), character);
    changeHP(random(20), enemy);
});*/

/*$btnFatal.addEventListener('click', function() {
    changeHP(random(20*3), character);
    changeHP(random(20*3), enemy);
});*/

kick($btn, 20);
kick($btnFatal, 100);

function init() {
    renderHP(character);
    renderHP(enemy);
}

function renderHP(person) {
    renderHPLife(person);
    renderProgressBarHP(person);
}

function renderHPLife(person) {
    person.elHP.innerText = person.damageHP + '/' + person.defaultHP;
}

function renderProgressBarHP(person) {
    person.elProgressbar.style.width = person.damageHP + '%';
}

function changeHP(count, person) {
    if (person.damageHP < count) {
        person.damageHP = 0;{}
        alert(person.name + ' проиграл!');
        $btn.disabled = true;
        $btnFatal.disabled = true;
    } else {
        person.damageHP -= count;
    }

    renderHP(person);
}

function random(num) {
    return Math.ceil(Math.random() * num);
}

function kick(btn, damage) {
    btn.addEventListener('click', function() {
        changeHP(random(damage), character);
        changeHP(random(damage), enemy);
    });
}

init();

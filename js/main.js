'use strict';

let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let getNumber = function (b){
    console.log(b);
    return function foo(myNum = prompt('Угадай число от 1 до 100')){
        if (myNum === null) {
            alert('Игра окончена');
        } else if (Number(myNum) === b) {
            alert('Поздравляю, Вы угадали число!!!');
        } else if (myNum > b) {
            foo(prompt('Загаданное число меньше, введите другой вариант'));
        } else if (myNum < b) {
            foo(prompt('Загаданное число больше, введите другой вариант'));
        } else if (!isNumber(myNum)) {
            foo(prompt('Введите число!'));
        } 
    };
};

let getRandomNum = getNumber(Math.floor(Math.random() * 100));
getRandomNum();
console.dir(getRandomNum);
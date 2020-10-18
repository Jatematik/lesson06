'use strict';

let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let getNumber = function (){
    let b = Math.floor(Math.random() * 100);
    console.log(b);
    return function foo(myNum){
        myNum = prompt('Угадай число от 1 до 100');
        console.log(myNum);
        if (myNum === null) {
            return alert('Игра окончена');
        } else if (Number(myNum) === b) {
            return alert('Поздравляю, Вы угадали число!!!');
        } else if (myNum > b) {
            return foo(alert('Загаданное число меньше, введите другой вариант'));
        } else if (myNum < b) {
            return foo(alert('Загаданное число больше, введите другой вариант'));
        } else if (!isNumber(myNum)) {
            return foo(alert('Введите число!'));
        } 
    };
};

let getRandomNum = getNumber();
getRandomNum();
console.dir(getRandomNum);
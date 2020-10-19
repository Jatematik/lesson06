'use strict';

let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let getNumber = function (){
    const b = Math.floor(Math.random() * 100);
    console.log(b);
    return function foo(){
        let myNum = prompt('Угадай число от 1 до 100');
        if (myNum === null) {
            alert('Игра окончена');
        } else if (Number(myNum) === b) {
            alert('Поздравляю, Вы угадали число!!!');
        } else if (myNum > b) {
            alert('Загаданное число меньше, введите другой вариант');
            foo();
        } else if (myNum < b) {
            alert('Загаданное число больше, введите другой вариант');
            foo();
        } else if (!isNumber(myNum)) {
            alert('Введите число!');
            foo();
        } 
    };
};

let getRandomNum = getNumber();
getRandomNum();
console.dir(getRandomNum);
'use strict';

let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let getNumber = function (){
    let myNum = prompt('Угадай число от 1 до 100');
    console.log(myNum);
    let b = Math.floor(Math.random() * 100);
    console.log(b);
    return function(){
        for (let i = 0; i < Infinity; i++){
            if (myNum === null) {
                alert('Игра окончена');
                break;
            } else if (Number(myNum) === b) {
                alert('Поздравляю, Вы угадали число!!!');
                break;
            } else if (myNum > b) {
                myNum = prompt('Загаданное число меньше, введите другой вариант');
            } else if (myNum < b) {
                myNum = prompt('Загаданное число больше, введите другой вариант');
            } else if (!isNumber(myNum)) {
                myNum = prompt('Введите число!');
            } 
        }   
    };
};

let getRandomNum = getNumber();
getRandomNum();
console.dir(getRandomNum);
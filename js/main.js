'use strict';

let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let myNum = prompt('Угадай число от 1 до 100'); // Исправить на 100
let a = Number(myNum);
let b = Math.floor(Math.random() * 100);
console.log(b);
// console.log(typeof a);
let getNumber = function (){
    for (let i = 0; i < 100; i++){
        if (a > b) {
            myNum = prompt('Загаданное число меньше, введите другой вариант');
            a = Number(myNum);
            console.log(typeof a);
        } else if (a < b) {
            myNum = prompt('Загаданное число больше, введите другой вариант');
            a = Number(myNum);
            console.log(typeof a);
        }
    }
};
getNumber();
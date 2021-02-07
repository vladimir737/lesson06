'use strict';
function global(){
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
 };
 function random() {
    return Math.ceil(Math.random() * 100);
}
alert ('Угадай число от 1 до 100');
let number = random();
console.log(number);

let guess = prompt('Какое число я загадал?');
let points = 0;

   
 function random1() {

    if (+guess > number) {
        guess = +prompt('Загадайте число меньше'); 
        random1();
    } else if (guess === null) {
        alert ('Игра окончена');
        global();
    }else if (+guess < number) {
        guess = +prompt('Загадайте число больше');
        random1() ; 
    } else if (!isNumber(guess)) {
        guess = +prompt('Введите число');
        random1();     
    } if (+guess === number) {
        alert('Поздравляю вы угадали');
        global();
    }   
}
random1(guess);

}global();


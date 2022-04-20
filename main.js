"use strict";
/* • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
• • • • • JavaScript необходимые основы для начинающих • • • • •
• • • • • • • • • • • • практический курс • • • • • • • • • • •
• • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
• • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • */
// ================== 0. Настройка окружения ===============
/*
- Установка редактора
- Установка плагина liveServer
- Моя тема Ayu
- Создание проекта
*/

// =================== 1. Подключение ===================
/*
- index.html
- файл main.js
- тег <script src></script>
- Запуск в liveServer
- команда console.log для вывода информации в консоль браузера
- комментарии
*/

//переменные

//let - может менять значение во время работы программы 
// let userName = 'Марк';

//let-переменная (новый стандарт)
//const- константа 

//var - переменная (старый стандарт)

//[1, 2]если не поставить ; то массив не работает

// console.log(userName);

//типы переменных
//const не может менять значение


// userName = 'Егор';
// console.log(userName);

// const yearOfBirth = 1990;
//yearOfBirth = 2000; не будет работать

// const p = 3.14;

//var старый формат объявления переменной
// в отличие от let and const имеет функциональную область видимости,а не блочную

// function sum() {
//     var userName = 'Artem';
//     console.log(userName);
// }
// sum();

// let and const имеет область видимости внутри блока кода

// пример 
//{
   // let userName = 'Bob' функц область видимости
   //console.log(userName)
//}

// по умолчанию используем const,
//крнла явер преяиер чир переменная будет менять свое значение, тогда Let 

//ТИПЫ ДАННЫХ!!

// let userName = 'Mark';// строка (текст) (одно слова.фраза)

// let num = 30;//число

// let isMarried = true; // логическое значение тру фолс

// //ДИНАМИЧЕСККАЯ ТИПИЗАЦИЯ 

// let someVariable = 'Some value';// string

// someVariable = 50;// number

// someVariable = true;// boolean

// Плохое пример

// let u = 'Bob';
// console.log(u);
//хороший пример 
// let userName = 'Jam';

//Значение null ничего пусто неизвестно

// let age = 32;
// age = null;//сбросили значение

// let userName ;//undefined
// console.log(userName);

// как стоит делать

// let someName = 'James';
// someName = undefined;//так не делают!
// someName = null;//так делают

//Массивы 
//Объекты

//Оператор typeof

// const someName = 'Bob';
// console.log(typeof someName);// вывод типа даннных

//BigInt

// console.log(Number.MAX_SAFE_INTEGER);//максимально допустимое число

// console.log(949494949494949494949494n);//для больших чисел (можно использовать только с бигинт)

//Symbol исопльзуется для того чтобы создать уникальные значения для имен свой в объектах
// Позволяет добавлять уникальное свойство к объекту,с уверенностью что он не перезапишет никакое другое свойство

//Операторы сравнения и условия
/* 
Операторы сравнения
>, <, >=,<= - больше меньше больше либо равно меньше либо равно
== нестрогое сравнение
=== строгое сравнение
!= нестрогое равенство
!== строгое равенство
*/


// console.log(10>5);//true

// console.log(20>80);//false

// let result = 10>5;
// console.log(result);

// console.log('5'== 5);//true
// console.log('5'=== 5);//false

/*
if (условие) {
   //код который будет выполнен если условие верно
} else {
   //код который будет выполнен если условие НЕ верно
}
*/

// const time = 20;

// if (time < 12) {
//    console.log('Good Morning');
// } else if (time >= 12 && time < 18) {
//    console.log('Good day');
// } else {
//    console.log('good evening');
// }   

/* Логические операторы
&& - Логическое И
|| - логическое ИЛИ
!true - логическое НЕ 
*/

// ТЕРНАРНЫЙ ОПЕРАТОР

// if (10 > 12) {
//    console.log('Условие верно');
// } else {
//    console.log('Условие НЕ верно');
// }

//(условие) ? (условие верно) : (условие не верно);

// 10 < 12 ? console.log('Условие верно') : console.log ('Условие НЕ верно');

// let greeting;
// let time = 20;
// // if (time < 12) {
// //    greeting = 'Good morning';
// // } else {
// //    greeting = 'Good day';
// // }

// // console.log(greeting);

//  let greeting = time < 12 ? 'Доброе утро' : 'Добрый день';
//  console.log (greeting);


// ======= КОНКОТЕНАЦИЯ СТРОК И ШАБЛОННЫЕ СТРОКИ ===============

// let greeting = 'Hello, Mark!';
// let howAreYou = 'How are you?';

// let sayHi = greeting + howAreYou;
// console.log(sayHi);
// //конкатенация строка + строка
// const userName = 'Mark';
// console.log('Hello,' + userName + '! how are you?');

// //шаблонные строки
// //шаблонные строки и интерполяция
// console.log(`Hello, ${userName}! How are you?`);

// ========== ФУНКЦИИ ============

//dry - don't repeat yourself(не повторяй себя)

// function sayHi() {
//    console.log('Hello, dear user');
// }
// sayHi();

//function declaration
// function sayHi() {
//    alert('Hello');
// }
//function expression
// const sayHi = function () {
//    console.log('Hello');
// };
// sayHi();
// sayHi();
// function sayHi() {
//    console.log('Hello');
// }// ++++++ выглядит короче лаконичней 

// ================== ПАРАМЕТРЫ И АРГУМЕНТЫ ДЛЯ ФУНКЦИИ =====================



// const userName = 'Mark';
// console.log(`Hello, ${userName}! How are you?`);

// function sayHi(name) {
//    console.log(`Hello, ${name}! How are you?`);//параметры

// }
// sayHi('Yura');//вызов с передачей в нее аргументов!!!!!!!!!!!


//============== return ================

// function sum(a, b) {
//    console.log('Start');
//    const result = a + b;
//    return result;
// }
// let res = sum(10, 15);//let res = sum (console.log(sum)
// console.log(res);

// =============== ФУНКЦИЯ КАК АРГУМЕНТ ==================

// function sum(a, b) {
//    return a + b;
// }

// function diff(a, b) {
//    return a - b;
// }

// // // console.log(sum(10, 15));


// // const result = sum(sum(15, 15), sum(20, 20));
// // console.log(result);

// function doSomething(func) {
//    let result = func(10, 15);
//    console.log(result);//функция обратного вызова
// }
// doSomething(sum);

// doSomething(diff);


// ================ САМОВЫЗЫВАЮЩАЯСЯ ФУНКЦИЯ IIFE ============

// Immediately Invoked Function Expression НЕЗАМЕДЛИТЕЛЬНО ВЫЗЫВАЮЩИЕСЯ ФУНКЦИЯ 

// (function sayHi() {
//    console.log('Hello, my dear user');

// })();

// // () создает выражение 
// ЗАДАЧА 1 
// let res = (function sum(a, b) {
//    return (a + b);
// })(10, 15);
// console.log(res);
// function removeChar(str) {
//    return str.slice(1, -1);
// }

// ЗАДАЧА 2
// function makeNegative(num) {
//    return -Math.abs(num);// преобразование положительного числа в отрицательное
//  }

//ЗАДАЧА 3
// function repeatStr (n, s) {
//    return s.repeat(n);возвращает n- кол во раз строку s
//  }


// =========== Стрелочный функции =============




// function sayHi (name) {
//    console.log(`Привет, ${name} ! Как твои дела?`);
// }
// sayHi('Марк');

// const arrSayHi = (name) => {
//    console.log(`Привет, ${name} ! Как твои дела?`);
// };
// arrSayHi('Марк');

// const arrSayHi = (name) => {
//    console.log(`Привет, ${name} ! Как твои дела?`);
// };
// arrSayHi('Марк');


// const sayHi2 = (name) => console.log(`Hello, ${name} ! How are you?`);
// sayHi2 ('Mark');//сокращенная стрелочная функция

// const sum = (a, b) => {
//    const result = a + b;
//    return result;
// };

// const sum = (a, b) => a + b;

// const res = sum (10, 30);
// console.log(res);

// =========== МАССИВЫ ===========

// const autoBrands = ['Audo', 'BMW', 'Mazda', 'Toyota'];
// console.log(autoBrands);
// console.log(autoBrands[0]);

// =========== МЕТОДЫ МАССИВОВ =============

/* push(), shift(), unshift(), splice(), slice(), forEach(), indexOf(), incLudes()

*/


/* 
.push(...items) - Добавить элемент в конец массива
.arr.pop()- Удалить элемент из конца массива
arr.shift()- Удалить элемент из начала массива
arr.unshift(...items)- Добавить элемент в начало массива
arr.splice([start]], [delete,Count, newElements])- Добавление нескольких элементов массива
*/

// const autoBrands = ['Audo', 'BMW', 'Mazda', 'Toyota'];
// console.log(autoBrands);
// console.log(autoBrands[0]);
// autoBrands.push('Nissan');
// console.log(autoBrands);



// function find_average(array) {
//    if (array.length === 0) {
//   return 0; Находит среднеее число и 0
//      }
//   return array.reduce ((a, b) => (a + b)) / array.length;
//   }

// function makeUpperCase(str) {
//    return str.toUpperCase([0]); возвращает вводную строку в верхний регистр
//  }


// function calculator(a,b,sign){
//    if ((typeof a === "number") && (typeof b === "number")) {// простой калькулятор 
//      switch (sign) {
//      case "+":
//        return a + b;
//      case "-":
//        return a - b;
//      case "*":
//        return a * b;
//      case "/":
//        return a / b;
//      }
//    }
//    return "unknown value";
//  }


// function maskify(cc) {
//   return cc.replace(/.(?=....)/g, '#');// замена чисел на #
// }


// function reverseList(list) {
//   return list.reverse();
// }


// const problem = x => typeof x === 'string' ? 'Error' : x * 50 + 6; решение задачи 


// function switchItUp(number) {
//   switch (number) {
//       case  0 :
//     console.log('Zero');
//       break;
//       case 1 :
//       console.log('One');
//       break;
//       case 2 :
//       console.log('Two');
//       break;
//       case 3 :
//       console.log('Three');
//       break;
//       case 4 :
//       console.log ('For');
//       break;
//       case 5 :
//       console.log ('Five');
//       break ;
//       case 6 :
//       console.log ('Six');
//       break;
//       case 7 :
//       console.log ('Seven');
//       break;
//       case 8 :
//       console.log ('Seven');
//       break;
//       case 9 :
//       console.log ('Nine');
//       break;
//   }
// }


// function getRandomInt(min, max) {
//    min = Math.ceil(min);
//    max = Math.floor(max);
//    return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(getRandomInt(3, 5));

// function getRandomInt (min, max) {
//    return Math.round(min * max)/100;
// }
// console.log (getRandomInt(1.005, -2));


// var salary = [3200, 3350, 1620, 4000];
// function checkSalary(salary,) {
//     return salary >= 3200 ;

// }
// console.log(salary.filter(checkSalary));


// let users = [
//    {id: 1, name: "Вася"},
//    {id: 2, name: "Петя"},
//    {id: 3, name: "Маша"}
//  ];
 
//  // возвращает массив, состоящий из двух первых пользователей
//  let someUsers = users.filter(item => item.id == 2);
 
//  console.log(someUsers.length); // 2

//  let array = [1, 2, 3, 5];
// let multiplyByTwo = array.map(elem=> elem * 2);
//  console.log(multiplyByTwo); метод мап


//  let newArray = [2, 8, 23, 56];
//  let searchNum = newArray.filter(elem => elem > 10);
//  console.log(searchNum); метод фильтр



// let a = [1, 2, 3, 4, 5];
// let b = a.reduce((accum, item) => {
//    accum = accum + item;
//    return accum; 
// });
// console.log(b); метод reduce 


// const array = [1, 2, 3, 4, 5, 6];
// array.forEach((elem, i, arr) => {
//    console.log(elem);
// });

// const c = [1, 2, 3, 4, 5, 6];
// let b = c.findIndex(item => item ==4);
// console.log(b);

// var arr = [1, -1, 2, -2, 3];
// const isPositive = (elem => elem >= -3);
// console.log(arr.every(isPositive));


// var arr4 = [1, 2, , 4,, , 5];
// console.log (arr4.flat());
// const searchIndexOf = 'Дивный мир';
// console.log(searchIndexOf.indexOf('и', 2));
// const str = ' АБВГД ';
// console.log(str.trim(' АБВГД '));


// const str = 'Hello i play in game';
// const res = str.split(' ');
// console.log(res);

var x = 6;
console.log((254).toString());
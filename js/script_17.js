// МЕТОДЫ И СВОИСТВА СТРОК И ЧИСЕЛ

"user strict"
// СТРОКИ
// example 01
const str = 'tesT';
const arr = [1, 2, 3, 'd', false];

// своиства
console.log(str.length);
console.log(str[0]);
console.log(arr.length);

// методы
console.log(str.toUpperCase());
console.log(str.toLowerCase());



// example 02
const fruit = 'some fruit';

console.log(fruit.indexOf('fruit'));



// example 03
const logg = 'hello world';

console.log(logg.slice(6, 11));
console.log(logg.substring(0, 5));
console.log(logg.substr(6, 1)); //устаревший метод используем substring и slice




// ЧИСЛА

// example 04
const num = 12.2;
console.log(Math.round(num));



// example 05
const num2 = '12.3px';
console.log(parseInt(num2));
console.log(parseFloat(num2));



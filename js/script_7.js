'user strict'

//модальное окно через alert
// alert('hello');


// Задать вопрос через команду confirm, чтоб получить буливый ответ
// const result = confirm('Are you here?');
// console.log(result);


// получить от пользователя конкретный ответ через promt 
// const answer = prompt('есть 18?', '18'); // вторая 18 это плейсхолдер. Информация от пользователя в этом случае приходит в строковом типе впрочем как и в других случиях приходит вся инфа в строковом типе данных
// console.log(typeof(answer));

//массивы
const answers = [];

answers[0] = prompt('как ваше имя?', '');
answers[1] = prompt('фамилия?', '');
answers[2] = prompt('годков?', '');

document.write(answers);
console.log(typeof(answers));
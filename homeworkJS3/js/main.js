// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 1;
if (x!=0){
    console.log('Вірно')
}else{
    console.log('Невірно')
}


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 20;
if (time >= 0 && time <= 14) {
	alert('В першу четверть.');
}
if (time >= 15 && time <= 30) {
	alert('В другу четверть.');
}
if (time >= 31 && time <= 45) {
	alert('В третью четверть.');
}
if (time >= 46 && time <= 59) {
	alert('В четверту четверть.');
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 20;
if (day  >= 0 && day  <= 10) {
	alert('В першу декаду.');
}
if (day  >= 11 && day  <= 20) {
	alert('В другу декаду.');
}
if (day  >= 21 && day  <= 31) {
	alert('В третью декаду.');
}


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).


let week = prompt('enter number day per week');
    switch (week) {
        case '1':
            console.log('Monday');
            break;
        case '2':
            console.log('Tuesday');
            break;
        case '3':
            console.log('Wednesday');
            break;
        case '4':
            console.log('Thursday');
            break;
        case '5':
            console.log('Friday');
            break;
         case '6':
            console.log('Saturday');
            break;
        case '7':
            console.log('Sunday');
            break;
        default:
        console.log('wrong number day per week');
    }


// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let number1 = +prompt('enter number 1');
let number2 = +prompt('enter number 2');
if(number1>number2){
    console.log(number1) 
}
else if(number1<number2){
    console.log(number2) 
}
else if(number1=number2){
    console.log('equally') 
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

let q = NaN;
if(false||!q){
    console.log('default')
}


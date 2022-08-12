// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str = 'hello world';
// console.log(str.length);

// let str = 'lorem ipsum';
// console.log(str.length);

// let str = 'javascript is cool';
// console.log(str.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str = 'hello world';
// console.log(str.toUpperCase());

// let str = 'lorem ipsum';
// console.log(str.toUpperCase());

// let str = 'javascript is cool';
// console.log(str.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str = 'HELLO WORLD';
// console.log(str.toLowerCase());

// let str = 'LOREM IPSUM';
// console.log(str.toLowerCase());

// let str = 'JAVASCRIPT IS COOL';
// console.log(str.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// console.log(str.slice(1, 13));

// let str = ' dirty string   ';
// console.log(str.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
// let stringToarray = str.split(' ')
// console.log(stringToarray);


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// const array1 = [10,8,-7,55,987,-1011,0,1050,0];
// const map1 = array1.map(value => value);
// console.log(map1);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11,21,3];
// const sortNums = (direction, arr)=> {
//     if (direction === 'ascending') {
//         nums.sort((a, b) => a - b)
//     } else {(direction === 'descending')
//         nums.sort((a, b) => b - a)
//     }
//     return nums;
// }
// console.log(sortNums('ascending',nums ));
// console.log(sortNums('dascending',nums ));



// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration


// coursesAndDurationArray.sort((a,b)=>b.monthDuration - a.monthDuration);
// console.log(coursesAndDurationArray);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// function filterByMonthDuration(item) {
//     if (item.monthDuration > 5) {
//         return true
//     }
// }
// let arrByID = coursesAndDurationArray.filter(filterByMonthDuration)
// console.log(arrByID)




// описати колоду карт
// let cards = [
//     {value: 'joker', color: 'black'},
//     {value: 'joker', color: 'red'},
//     {cardSuit: 'heart',value: '6', color: 'red'},
//     {cardSuit: 'heart',value: '7', color: 'red'},
//     {cardSuit: 'heart',value: '8', color: 'red'},
//     {cardSuit: 'heart',value: '9', color: 'red'},
//     {cardSuit: 'heart',value: '10', color: 'red'},
//     {cardSuit: 'heart',value: 'ace', color: 'red'},
//     {cardSuit: 'heart',value: 'jack', color: 'red'},
//     {cardSuit: 'heart',value: 'queen', color: 'red'},
//     {cardSuit: 'heart',value: 'king', color: 'red'},
//
//     {cardSuit: 'diamond',value: '6', color: 'red'},
//     {cardSuit: 'diamond',value: '7', color: 'red'},
//     {cardSuit: 'diamond',value: '8', color: 'red'},
//     {cardSuit: 'diamond',value: '9', color: 'red'},
//     {cardSuit: 'diamond',value: '10', color: 'red'},
//     {cardSuit: 'diamond',value: 'ace', color: 'red'},
//     {cardSuit: 'diamond',value: 'jack', color: 'red'},
//     {cardSuit: 'diamond',value: 'queen', color: 'red'},
//     {cardSuit: 'diamond',value: 'king', color: 'red'},
//
//     {cardSuit: 'spade',value: '6', color: 'black'},
//     {cardSuit: 'spade',value: '7', color: 'black'},
//     {cardSuit: 'spade',value: '8', color: 'black'},
//     {cardSuit: 'spade',value: '9', color: 'black'},
//     {cardSuit: 'spade',value: '10', color: 'black'},
//     {cardSuit: 'spade',value: 'ace', color: 'black'},
//     {cardSuit: 'spade',value: 'jack', color: 'black'},
//     {cardSuit: 'spade',value: 'queen', color: 'black'},
//     {cardSuit: 'spade',value: 'king', color: 'black'},
//
//     {cardSuit: 'clubs',value: '6', color: 'black'},
//     {cardSuit: 'clubs',value: '7', color: 'black'},
//     {cardSuit: 'clubs',value: '8', color: 'black'},
//     {cardSuit: 'clubs',value: '9', color: 'black'},
//     {cardSuit: 'clubs',value: '10', color: 'black'},
//     {cardSuit: 'clubs',value: 'ace', color: 'black'},
//     {cardSuit: 'clubs',value: 'jack', color: 'black'},
//     {cardSuit: 'clubs',value: 'queen', color: 'black'},
//     {cardSuit: 'clubs',value: 'king', color: 'black'}
//
// ]


// - знайти піковий туз

// function filterByTuz(item) {
//     if (item.cardSuit == 'spade' && (item.value == 'ace')) {
//         return true
//     }
// }
// let arrByID = cards.filter(filterByTuz)
// console.log(arrByID)

// - всі шістки

// function filterByNumber(item) {
//     if (item.value == 6) {
//         return true
//     }
// }
// let arrByID = cards.filter(filterByNumber)
// console.log(arrByID)

// - всі червоні карти
// function filterByRed(item) {
//     if (item.color == 'red') {
//         return true
//     }
// }
// let arrByID = cards.filter(filterByRed)
// console.log(arrByID)


// - всі буби

// function filterByDiamond(item) {
//     if (item.cardSuit == 'diamond') {
//         return true
//     }
// }
// let arrByID = cards.filter(filterByDiamond)
// console.log(arrByID)

// - всі трефи від 9 та більше

// function filterByNumber(item) {
// let filter = cards.filter(value => value.cardSuit === 'spade' && value.value > '8' || value.value === '10' && value.color === 'black' || value.value === 'string' &&
// value.cardSuit === 'spade' || value.value === 'joker' && value.color === 'black');
// console.log(filter)


//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }



// let reduce = cards.reduce(function (accu,card ) {
//   if (card.cardSuit== 'spade') {
//       accu.Spade.push(card)
//   }
//     if (card.cardSuit== 'heart') {
//         accu.Heart.push(card)
//     }
//     if (card.cardSuit== 'clubs') {
//         accu.Clubs.push(card)
//     }
//     if
//       (card.cardSuit== 'diamond')
//           accu.Diamonds.push(card)
//
//
//   return accu;
//
// },{Spade:[], Heart:[], Clubs:[], Diamonds :[],});
// console.log(reduce)



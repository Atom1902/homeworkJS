// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [123, 234, 345, -123, 0, true, false, 'neo', 'a', 'b', 'c' ];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[8]);
console.log(arr[9]);
console.log(arr[10]);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let   book1={
    title: 'Peter Pan',
    pageCount: 150,
    genre: 'tale',
}
let   book2={
    title: 'Muhammad Ali',
    pageCount: 200,
    genre: 'biography',
}
let   book3={
    title: 'A Game of Thrones',
    pageCount: 250,
    genre: 'Fantasy',
}


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age


let   bk1={
    title: 'Peter Pan',
    pageCount: 150,
    genre: 'tale'}
    [{authors: 'J. M. Barrie', age: 118}];

let bk2={
    title: 'Muhammad Ali',
    pageCount: 200,
    genre: 'biography'}
    [{authors: 'Muhammad Ali', age: 78}];


let bk3={
    title: 'A Game of Thrones',
    pageCount: 250,
    genre: 'Fantasy'}
    [{authors: 'George R. R. Martin', age: 73}];





// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {name: 'user1', username: 'us1', password: 'use1'},
    {name: 'user2', username: 'us2', password: 'use2'},
    {name: 'user3', username: 'us3', password: 'use3'},
    {name: 'user4', username: 'us4', password: 'use4'},
    {name: 'user5', username: 'us5', password: 'use5'},
    {name: 'user6', username: 'us6', password: 'use6'},
    {name: 'user7', username: 'us7', password: 'use7'},
    {name: 'user8', username: 'us8', password: 'use8'},
    {name: 'user9', username: 'us9', password: 'use9'},
    {name: 'user10', username: 'us10', password: 'use10'},
   ];
   console.log(users[0].password);
   console.log(users[1].password);
   console.log(users[2].password);
   console.log(users[3].password);
   console.log(users[4].password);
   console.log(users[5].password);
   console.log(users[6].password);
   console.log(users[7].password);
   console.log(users[8].password);
   console.log(users[9].password);

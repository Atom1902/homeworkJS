// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function areaRectangle(a, b) {
//         let res = (a + b)*2;
//         return res;
//     }
//     let x = areaRectangle(2, 3);
//     console.log (x);

    
// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function areaCircle(p) {
//        let res = p + 3.14**2;
//     return res;
// }
// let q = areaCircle(2);
// console.log (q);


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function areaCylinder(R, H) {
//     let res =  2*3.14*(R**2)+ 2*3.14*R*H;
//  return res;
// }
// let a = areaCylinder(1, 1);
// console.log (a);



// - створити функцію яка приймає масив та виводить кожен його елемент


// let array = [1,2,3,4];
// let arrNumber = arr => {
//     console.log(arr);
//     for (const arrElement of arr) {
//         console.log(arrElement);
//     }
// }
// arrNumber(array);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент


// function pWithText(text) {
//         document.write(`<p>${Text}</p>`);
//     }
//     pText('Lorem ipsum, dolor sit amet consectetur adipisicing elit.)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function lishka(text) {
//     document.write(`
//     <ul>
//     <li>${text}</li>
//     <li>${text}</li>
//     <li>${text}</li>
//     </ul>`);
// }
// lishka('Lorem ipsum, dolor sit amet consectetur adipisicing elit.')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
// function arrayLi (litext, arrlength){
//     document.write(`<ul>`);
//     for(let i = 0; i < arrlength; i++){
//         document.write(`<div><li>litext</li></div>`);
//     }
//     document.write(`<ul>`);
// }
// arrayLi ('Lorem ipsum', 10)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let k = [1, 'text', false];
//     function  elementOfArray(arr)
//     {
//              for(i = 0; i < arr.length; i++)
//                     element = arr[i];
//
//     document.write(`
//     <ul>
//     <li>${k[0]}</li>
//     <li>${k[1]}</li>
//     <li>${k[2]}</li>
//     </ul>`);
// }
// elementOfArray(k)

   
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
  // let users = [
  //       {id:10, name: 'vasya', age: 31},
  //       {id:15, name: 'petya', age: 30},
  //       {id:22, name: 'kolya', age: 29},
        
  //   ];
  //   function  objectOfArray(arr) {
  //   for(let i = 0; i < arr.length; i++){
                           
  //   document.write(`<div>id:${users[i].id},name:${users[i].name}, age:${users[i].age}</div>`);
   
  // }
  // }
  // objectOfArray(users)

// - створити функцію яка повертає найменьше число з масиву
// перебиранням то канєшна капець..


// const numbers = [3, 4, 9, 3, 5, 1, 7]; 
// function arrayMin(array){

// let minimum = numbers[0];
// for (const item of numbers) {
//   if(item < minimum) {
//     minimum = item; 
//   }
// }
// return  minimum
// }
// console.log(arrayMin(numbers));

// Простіше методом..



// let arr = [3,2,5,6];
// function arrayMin(array){
// let min = 0;
// for(let i = 0; i < array.length; i++){
//     min = Math.min (...arr);
//     }
// return  min
// }
// console.log(arrayMin(arr));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arr = [3,2,5,6];
// function arraySum(array){
// let sum = 0;
// for(var i = 0; i < array.length; i++){
//     sum += array[i];
//     }
// return  sum
// }
// console.log(arraySum(arr));
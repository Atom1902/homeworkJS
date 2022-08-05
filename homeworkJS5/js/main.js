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

    
//     function  elementOfArray(arr)
//     {
//      for(i = 0; i < arr.length; i++)
//             element = arr[i];
//         return element;
//     }
     
//    let k = [1, 2, 3, 4, 5, 6, 7];
//     console.log(k);
    

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент


// function pWithText(Text) {
//         document.write(`<p>${Text}</p>`);
//     }
//     pText('Lorem ipsum, dolor sit amet consectetur adipisicing elit.)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function lishka(Text) {
//     document.write(`
//     <ul>
//     <li>${Text}</li>
//     <li>${Text}</li>
//     <li>${Text}</li>
//     </ul>`);
// }
// lishka('Lorem ipsum, dolor sit amet consectetur adipisicing elit.')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function lishka(Text, b) {

//   for(i = 0; i < arr.length; i++)

//     document.write(`
//     <ul>
//     <li>${Text}</li>
//     <li>${Text}</li>
//     <li>${Text}</li>
//     </ul>`);

// }
// lishka('Lorem ipsum, dolor sit amet consectetur adipisicing elit.')


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let k = [1, 'text', false];
//     function  elementOfArray(arr)
//     {
//              for(i = 0; i < arr.length; i++)
//                     element = arr[i];
//                 return element;
//             }
    
//     document.write(`
//     <ul>
//     <li>${k[0]}</li>
//     <li>${k[1]}</li>
//     <li>${k[2]}</li>
//     </ul>`);


  
   
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
  // let users = [
  //       {id:10, name: 'vasya', age: 31},
  //       {id:15, name: 'petya', age: 30},
  //       {id:22, name: 'kolya', age: 29},
        
  //   ];
  //   function  objectOfArray(arr)
  //   {
  //   for(let i = 0; i < arr.length; i++)
                           
  //   document.write(`<div>id:${users[i].id},name:${users[i].name}, age:${users[i].age}</div>`);
   
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
// console.log(minimum); 
// }
// arrayMin(numbers);

// Простіше методом..



// let arr = [3,2,5,6];
// function arrayMin(array){
// let min = 0;
// for(var i = 0; i < array.length; i++){
//     min = Math.min (...arr);
//     }
// console.log(min);
// }
// arrayMin(arr);


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arr = [3,2,5,6];
// function arraySum(array){
// let sum = 0;
// for(var i = 0; i < array.length; i++){
//     sum += array[i];
//     }
// console.log(sum);
// }
// arraySum(arr);
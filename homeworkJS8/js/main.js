// - створити функцію конструктор для об'єктів user з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new user(....)

// function user (id, name, surname, email, phone){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let user1 = new user(1,'vanya', 'kor', 'kor@gmail.com','+380999999999');
// let user2 = new user(2,'yana', 'bur', 'bur@gmail.com','+380999999999');
// let user3 = new user(3,'vira', 'stat', 'stat@gmail.com','+380999999999');
// let user4 = new user(4,'taras', 'riz', 'riz@gmail.com','+380999999999');
// let user5 = new user(5,'misha', 'tret', 'tret@gmail.com','+380999999999');
// let user6 = new user(6,'oleg', 'but', 'but@gmail.com','+380999999999');
// let user7 = new user(7,'yla', 'poroh', 'poroh@gmail.com','+380999999999');
// let user8 = new user(8,'david', 'prok', 'prok@gmail.com','+380999999999');
// let user9 = new user(9,'david', 'vok', 'vok@gmail.com','+380999999999');
// let user10 = new user(10,'stepan', 'doc', 'doc@gmail.com','+380999999999');
//
// let arrayusers = [user1,user2,user3,user4,user5,user6,user7,user8,user9,user10];
//
// console.log(arrayusers);


// - взяти масив з  user[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let arrayusers = [user1,user2,user3,user4,user5,user6,user7,user8,user9,user10];
//
// console.log(arrayusers.filter(value => value.id % 2 === 0));

// - взяти масив з  user[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let arrayusers = [user1,user2,user3,user4,user5,user6,user7,user8,user9,user10];
//
// console.log(arrayusers.sort((a, b) => a.id - b.id));

// - створити класс для об'єктів client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами client

// class client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let client1 = new client(1,'vanya', 'kor', 'kor@gmail.com','+380999999999', ['iphone x', 'ssd']);
// let client2 = new client(2,'yana', 'bur', 'bur@gmail.com','+380999999999', ['xiaomi redmi note 10']);
// let client3 = new client(3,'vira', 'stat', 'stat@gmail.com','+380999999999', ['usb cable micro', 'headphones xiaomi', 'card reader']);
// let client4 = new client(4,'taras', 'riz', 'riz@gmail.com','+380999999999', ['card reader', 'usb cable type c', 'usb cable micro', 'hdmi cable']);
// let client5 = new client(5,'misha', 'tret', 'tret@gmail.com','+380999999999', ['poco m3 pro']);
// let client6 = new client(6,'oleg', 'but', 'but@gmail.com','+380999999999', ['card reader', 'aux cable']);
// let client7 = new client(7,'yla', 'poroh', 'poroh@gmail.com','+380999999999', ['micro sd card 64gb']);
// let client8 = new client(8,'david', 'prok', 'prok@gmail.com','+380999999999', ['battery xiaomi redmi 4x', 'screen protector for redmi 4x']);
// let client9 = new client(9,'david', 'vok', 'vok@gmail.com','+380999999999', ['speaker asus']);
// let client10 = new client(10,'stepan', 'doc', 'doc@gmail.com','+380999999999', ['xiaomi redmi 5a, display xiaomi redmi 5a', 'micro sd card 128gb', 'usb cable micro']);
//
// let clientsarray = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10]
// console.log(clientsarray);

// - взяти масив (client [] з попереднього завдання).відсортувати його по кількості товарів в полі order по зростанню. (sort)

// console.log(clientsarray.sort((a, b) => a.order.length - b.order.length));

// - створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

// function Car(model, prod, year, maxSp, value) {
//     this.model = model;
//     this.prod = prod;
//     this.year = year;
//     this.maxSp = maxSp;
//     this.value = value;
//     this.drive = function () {
//
//         console.log(`їдемо зі швидкістю ${this.maxSp} на годину`);
//     };
// }
//  let car = new Car('tesla100d', 'tesla', '2018', '200km')
// console.log(car);
// car.drive();


// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

// function Car(model, prod, year, maxSp, value) {
//     this.model = model;
//     this.prod = prod;
//     this.year = year;
//     this.maxSp = maxSp;
//     this.value = value;
//     this.info  = function () {
//
//         console.log(`Model ${this.model}, Prod ${this.prod}, Year ${this.year}, MaxSp ${this.maxSp}, Value ${this.value}`);
//     };
// }
// let car = new Car('tesla100d', 'tesla', '2018', '200km', 'none')
// console.log(car);
// car.info();



// -- increasemaxspeed (newspeed) - яка підвищує значення максимальної швидкості на значення newspeed


// function Car(model, prod, year, maxSp, value) {
//     this.model = model;
//     this.prod = prod;
//     this.year = year;
//     this.value = value;
//     this.maxSp = function (newSpeed) {
//         this.maxSp = this.maxSp + newSpeed;
//     };
// }
// let car = new Car('tesla100d', 'tesla', '2018', '200km', 'none')
// console.log(car);
// car.maxSp();

// -- changeyear (newvalue) - змінює рік випуску на значення newvalue


// function Car(model, prod, year, maxSp, value) {
//     this.model = model;
//     this.prod = prod;
//     this.value = value;
//     this.maxSp = maxSp;
//     this.year = function (newValue) {
//                 this.year = newValue;
//     };
// }
// let car = new Car('tesla100d', 'tesla', '2018', '200km', 'none')
// console.log(car);
// car.year();


// -- adddriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function car(model, producer, year, maxSp, value, driverName, driverAge ) {
//     this.model = model;
//     this.prod = prod;
//     this.year = year;
//     this.maxSp = maxSp;
//     this.value = value;
//     this.driver = {name: driverName, age: driverAge};
// }
// let car = new Car('tesla100d', 'tesla', '2018', '200km', 'none')
// console.log(car);
// car.driver();




// - (те саме, тільки через клас)
// створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// class CarClass{
//     constructor(model, prod, year, maxSp, value){
//         this.model = model;
//         this.prod = prod;
//         this.year = year;
//         this.maxSp = maxSp;
//         this.value = value;
//         this.drive = function () {
//
//             console.log(`їдемо зі швидкістю ${this.maxSp} на годину`);
//         };
//     }
// }
//  let carClass = new CarClass('tesla100d', 'tesla', '2018', '200km', 'none');
//
// console.log(carClass);
//     carClass.drive();


// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`


// class CarClass{
//     constructor(model, prod, year, maxSp, value){
//         this.model = model;
//         this.prod = prod;
//         this.year = year;
//         this.maxSp = maxSp;
//         this.value = value;
//         this.info  = function () {
//
//             console.log(`Model ${this.model}, Prod ${this.prod}, Year ${this.year}, MaxSp ${this.maxSp}, Value ${this.value}`);
//         };
//     }
// }
//  let carClass = new CarClass('tesla100d', 'tesla', '2018', '200km', 'none');
//
// console.log(carClass);
//     carClass.info();



// -- increasemaxspeed (newspeed) - яка підвищує значення максимальної швидкості на значення newspeed

// class CarClass{
//     constructor(model, prod, year, maxSp, value){
//         this.model = model;
//         this.prod = prod;
//         this.year = year;
//         this.value = value;
//         this.maxSp  = function (newSpeed) {
//
//             this.maxSp = this.maxSp + newSpeed;
//         };
//     }
// }
//  let carClass = new CarClass('tesla100d', 'tesla', '2018', '200km', 'none');
//
// console.log(carClass);
//     carClass.maxSp();


// -- changeyear (newvalue) - змінює рік випуску на значення newvalue

// class CarClass{
//     constructor(model, prod, year, maxSp, value){
//         this.model = model;
//         this.prod = prod;
//         this.maxSp = maxSp;
//         this.value = value;
//         this.year  = function (newValue) {
//
//             this.year = newValue;
//         };
//     }
// }
//  let carClass = new CarClass('tesla100d', 'tesla', '2018', '200km', 'none');
//
// console.log(carClass);
//     carClass.year();


// -- adddriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class CarClass{
//     constructor(model, prod, year, maxSp, value, driverName, driverAge ){
//         this.model = model;
//         this.prod = prod;
//         this.maxSp = maxSp;
//         this.value = value;
//         this.year  = year
//         this.driver = {name: driverName, age: driverAge};
//     };
//
// }
//  let carClass = new CarClass('tesla100d', 'tesla', '2018', '200km', 'none');
//
// console.log(carClass);
//     carClass.driver();


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. створити масив з 10 попелюшок.
// class  Cinderella {
//     constructor(name, age, size) {
//         this.name = name;
//         this.age = age;
//         this.shoeSize = shoeSize;
//     }
// }
//
// let Cinderella1 = new Cinderella('Anna', '23', '38' );
// let Cinderella2 = new Cinderella(Bella', '32','40');
// let Cinderella3 = new Cinderella('Lida', '21','37');
// let Cinderella4 = new Cinderella('Rita', '28','39' );
// let Cinderella5 = new Cinderella('Maria', '27','40' );
// let Cinderella6 = new cCinderella('Kara', '26','37' );
// let Cinderella7 = new Cinderella('Vita', '24','36' );
// let Cinderella8 = new Cinderella('Kira', '30','40');
// let Cinderella9 = new Cinderella('Yla', '33','39' );
// let Cinderella10 = new Cinderella('Dasha', '31','40');
//

// сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

// class  Prince extends Cinderella {
//     constructor(name, age, findFootSize) {
//         super(name,age);
//         this.findFootSize = findFootSize;
//     }
// }
//
// let prince = new Prince('vasya', 22 , 37)
// let find = (array, prince)=>{
//     for(const item of array){
//        if ( prince.findFootSize ===item.footSize){
//            return'My Cinderella is ${item.name}'
//        }
//     }
// }
//
//
// console.log(find(array, prince))
//
// let cinderella = array.find(value => prince.findFootSize === value.footSize)
// console.log(cinderella)
//     за допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку




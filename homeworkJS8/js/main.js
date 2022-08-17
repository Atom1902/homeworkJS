// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User (id, name, surname, email, phone){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let user1 = new User(1,'Vanya', 'Kor', 'Kor@gmail.com','+380999999999');
// let user2 = new User(2,'Yana', 'Bur', 'Bur@gmail.com','+380999999999');
// let user3 = new User(3,'Vira', 'Stat', 'Stat@gmail.com','+380999999999');
// let user4 = new User(4,'Taras', 'Riz', 'Riz@gmail.com','+380999999999');
// let user5 = new User(5,'Misha', 'Tret', 'Tret@gmail.com','+380999999999');
// let user6 = new User(6,'Oleg', 'But', 'But@gmail.com','+380999999999');
// let user7 = new User(7,'Yla', 'Poroh', 'Poroh@gmail.com','+380999999999');
// let user8 = new User(8,'David', 'Prok', 'Prok@gmail.com','+380999999999');
// let user9 = new User(9,'David', 'Vok', 'Vok@gmail.com','+380999999999');
// let user10 = new User(10,'Stepan', 'Doc', 'Doc@gmail.com','+380999999999');
//
// let arrayUsers = [user1,user2,user3,user4,user5,user6,user7,user8,user9,user10];
//
// console.log(arrayUsers);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let arrayUsers = [user1,user2,user3,user4,user5,user6,user7,user8,user9,user10];
//
// console.log(arrayUsers.filter(value => value.id % 2 === 0));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let arrayUsers = [user1,user2,user3,user4,user5,user6,user7,user8,user9,user10];
//
// console.log(arrayUsers.sort((a, b) => a.id - b.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client {
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
// let client1 = new Client(1,'Vanya', 'Kor', 'Kor@gmail.com','+380999999999', ['iphone x', 'ssd']);
// let client2 = new Client(2,'Yana', 'Bur', 'Bur@gmail.com','+380999999999', ['Xiaomi Redmi Note 10']);
// let client3 = new Client(3,'Vira', 'Stat', 'Stat@gmail.com','+380999999999', ['USB Cable micro', 'Headphones Xiaomi', 'Card Reader']);
// let client4 = new Client(4,'Taras', 'Riz', 'Riz@gmail.com','+380999999999', ['Card Reader', 'USB cable Type C', 'USB cable micro', 'HDMI cable']);
// let client5 = new Client(5,'Misha', 'Tret', 'Tret@gmail.com','+380999999999', ['Poco M3 Pro']);
// let client6 = new Client(6,'Oleg', 'But', 'But@gmail.com','+380999999999', ['Card Reader', 'AUX cable']);
// let client7 = new Client(7,'Yla', 'Poroh', 'Poroh@gmail.com','+380999999999', ['Micro SD card 64gb']);
// let client8 = new Client(8,'David', 'Prok', 'Prok@gmail.com','+380999999999', ['Battery Xiaomi Redmi 4x', 'Screen protector for Redmi 4x']);
// let client9 = new Client(9,'David', 'Vok', 'Vok@gmail.com','+380999999999', ['Speaker Asus']);
// let client10 = new Client(10,'Stepan', 'Doc', 'Doc@gmail.com','+380999999999', ['Xiaomi Redmi 5a, Display Xiaomi Redmi 5a', 'Micro SD card 128gb', 'USB cable micro']);
//
// let clientsArray = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10]
// console.log(clientsArray);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// console.log(clientsArray.sort((a, b) => a.order.length - b.order.length));

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

// function Car(mobel, producer, year, maxSpeed, value) {
//     this.model = model;
//     this.produser = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.value = value;


//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed}` на годину);
//     };

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

//     this.info = function () {
//         console.log(`модель = ${this.model},виробник = ${this.produser}`);
//     };

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

//     this.maxSpeed = function (newSpeed) {
//         this.maxSpeed = this.maxSpeed + newSpeed;
//     };

// -- changeYear (newValue) - змінює рік випуску на значення newValue

//     this.value = function (newValue) {
//         this.value = newValue;
//     }

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(mobel, producer, year, maxSpeed, value, driverName, driverAge ) {
//     this.model = model;
//     this.produser = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.value = value;
//     this.driver = {name: driverName, age: driverAge};
// }





// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

// class CarClass {
//     constructor(model, producer, year, maxSpeed, volume) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.volume = volume;
//     };
//
// }

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

// drive () {
//     console.log(`їдемо зі швидкістю ${this.maxSpeed}` на годину);
// };

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

// info () {
//     console.log(`модель = ${this.model},виробник = ${this.produser}`);
// };

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

// maxSpeed () {
//     this.maxSpeed = this.maxSpeed + newSpeed;
// };

// -- changeYear (newValue) - змінює рік випуску на значення newValue

// value () {
//     this.value = newValue;
// };
// year () {
//     this.year = newValue;
// }

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class CarClass {
//     constructor(model, producer, year, maxSpeed, volume, driverName, driverAge ) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.volume = volume;
//         this.driver = {name: driverName, age: driverAge};
//     };
//
// }

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

// class  Cinderella {
//     constructor(name, age, size) {
//         this.name = name;
//         this.age = age;
//         this.size = size;
//     }
// }
// let cinderellas = [
//     new Cinderella('cinderella1', 23,38 ),
//     new Cinderella('cinderella2', 32,40 ),
//     new Cinderella('cinderella3', 21,37 ),
//     new Cinderella('cinderella4', 28,39 ),
//     new Cinderella('cinderella5', 27,40 ),
//     new Cinderella('cinderella6', 26,37 ),
//     new Cinderella('cinderella7', 24,36 ),
//     new Cinderella('cinderella8', 30,40 ),
//     new Cinderella('cinderella9', 33,39 ),
//     new Cinderella('cinderella10', 31,40 )
//
// ]

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

// let prince = new Prince('prince', 33, 43);



//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// let cinderella = cinderellas.find(value => value.size === prince.shoe);

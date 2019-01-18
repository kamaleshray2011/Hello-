// 1 to 10 number count

// var result;
// for (i = 1; i < 10; i++) {
//     console.log(i);
// }

// // 0 to 10 even or odd number count 

// var result;
// for (i = 0; i < 10; i += 2) {
//     console.log(i);
// }

// // factorial count
// var n = 6;
// var factorial = 1;
// for (i = n; i > 1; i--) {
//     factorial *= i;
// }
// console.log(factorial);
// // var firstName = kamalesh;
// var lastName = Roy;

// function fullName(first, last) {
//     return 'My name is ' + first + ' ' + last;
// };
// var name = fullName;
// var na = name;
// var ka = na;
// // console.log(ka('kamalesh', 'Roy'));

// function wow(start, end) {
//     console.log(start(end));
//     return start(end);
// };
// console.log(wow('Hi', fullName));

// function hello(name) {
//     print(name);
// };

// function print(args) {
//     console.log(args);

// }
// hello('Kamalesh');

// function student(name, age) {
//     age(name);
// }
// student('Kamalesh Roy', function age(name) {
//     console.log('Hi, I am ' + name + '.' + ' I am 30 years old.');
// });

// student('Kamalesh Roy', function(name) {
//     console.log('Length of ' + name + ' is = ' + name.length);
// });

// var me = {
//     name: 'kamalesh',
//     age: 17,
//     email: 'kamaleshray2011@gmail.com'
// }

// function mySelf(person, callback) {
//     console.log('Person : ' + person.name + ' Age: ' + person.age);
//     if (person.age >= 18) {
//         callback(person.email);
//     } else {
//         console.log('You are so little...');
//     }
// }
// mySelf(me, function(email) {
//     console.log('Email sent to ' + email);
// })

// ======================
// function factorial(name) {
//     factorial = 1;
//     for (var i = 1; i < 4; i++) {
//         factotial *= i;
//     }
//     return factorial;
//     console.log(factorial);
// }
// var b = factorial;
// console.log(b(5));
// ==============

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo").innerHTML = fruits;

// function myFunction() {
//     fruits.sort();
//     document.getElementById("demo").innerHTML = fruits;
// }

// function add(a, b) {
//     function sum() {
//         return a + b;
//     }

//     function sub() {
//         return a - b;
//     }

//     function multiply() {
//         return a * b;
//     }

//     function divide() {
//         return a / b;
//     }
//     return sub() + sum() + multiply() + divide();
// }
// var result = add(40, 20);
// console.log(result);

// function name(firstName, lastName, gender) {
//     var output;
//     if (gender === 'male') {
//         output = "Mr." + " " + firstName + " " + lastName;
//     } else if (gender === 'female') {
//         output = "Ms." + " " + firstName + " " + lastName;
//     }
//     return output;
// }
// var result = name('Kamalesh', 'Roy', 'male');
// console.log(result);

// function example() {
//     return {
//         name: 'kamalesh',
//         skill: ['Javascript', 'Java'],
//         print: function() {
//             console.log(this.name, this.skill);
//         }
//     }


// }
// var result = example();
// result.print();

// function caller(name) {
//     console.log('Caller calling you ' + name)
// }
// caller('kamalesh');


// function caller() {
//     return function(name) {
//         return 'Caller calling you ' + name;
//     }
// }
// var a = caller();
// var result = a('kamalesh');
// result;
// var k = a('Kamal');
// k;

// call back function

// function hello(name) {
//     return print(name);
// }

// function print(args) {
//     console.log('Wellcome, ' + args + " Good afternoon.");
// }
// hello('Kamal');
// hello('Rahim');


// function hello(name, print){
//     print(name);
// }
// hello("Kamalesh",function(name){
//     console.log('Hi, '+name+' How are you?');
// })

// hello('Tripti', function(name){
//     console.log('Hello,'+name+" Where are you?")
// })


// function print(data, callback1, callback2) {
//     console.log('Original data: ' + data);
//     callback1(data);
//     callback2(data);
// }

// print('Twinkle Cats is Awesome For Beginners', function(data) {
//     var data = data.toUpperCase();
//     console.log('Upper Case: ' + data);
// }, function(data) {
//     var data = data.toLowerCase();
//     console.log('Lower Case: ' + data);
// });
// var sub = 10;

// function factorialize(num) {
//     var i = num;
//     var newNum = 1;
//     for (i; i > 1; i--) {
//         newNum *= i;
//     }
//     return newNum;
// }

// console.log(factorialize(5));


// function sub(total) {

//     var total = 50;
//     var sum = 5;
//     var final = total / sum;
//     for (i = total / sum; i < total; i--)
//         return final += i + 1;
//     console.log(final);

// }
// console.log(sub());

// var name = "Twinkle Cata";

// function sayName() {
//     console.log("Hello " + name);
// }
// sayName();

// function greeting(msg) {
//     return function(name) {
//         console.log(msg + " " + name)
//     }

// }
// var hello = greeting("Hello");
// hello("Twinkle Cats");

// var arr = [7, 12, 11, 16, 23, 21, 45, 67, 34, 78]
// arr.sort(function(a, b) {
//     return a - b;
// });
// arr;

// arr.sort(function(a, b) {
//     return b - a;
// });
// arr;

// var people = [{ name: "kamal", age: 24 },
//     { name: "Jamal", age: 32 },
//     { name: "Anik", age: 26 },
//     { name: "Barik", age: 30 },
//     { name: "Cats", age: 18 },
//     { name: "Deba", age: 20 },
//     { name: "Fahim", age: 35 }
// ];
// people.sort(function(a, b) {
//     return a.age - b.age;
// });
// console.log(people);

// people.sort(function(a, b) {
//     if (a.name > b.name) {
//         return 1;
//     } else if (a.name < b.name) {
//         return -1;
//     } else {
//         return 0;
//     }
// });
// console.log(people);

// var x = function myFunction(a, b) {
//     return a * b;
// }
// console.log(x(4, 5));

// function myFunction(a, b) {
//     function multiply() {
//         return a * b;
//     }
//     return multiply();
// }
// var result = myFunction(5, 6);
// console.log("Multiply of 5 and 6: " + result);

// var time = 5;

// if (time < 10) {
//     greeting = "Good morning";
//     console.log(greeting);
// } else if (time < 20) {
//     greeting = "Good day";
//     console.log(greeting);
// } else {
//     greeting = "Good evening";
//     console.log(greeting);
// }
// console.log("This time now: " + time + ".00 PM.");
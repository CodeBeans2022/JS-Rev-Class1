// Switch Statements 

// let x;

// if (x >= 10 && x <=20) {
// console.log('something')
// }

// else if(x === undefined){
//     console.log('This variable has no value.');
// }

// let marks = 50;

// switch(marks) {

// case 100:
// console.log(`You have outdone yourself`);
// break;

// case 90:
// console.log(`You have 90%`);
// break;

// case 80:
// console.log(`You have 80%`);
// break;

// case 70:
// console.log(`You have 70%`);
// break;

// case 60:
// console.log(`You have 60%`);
// break;

// case 50:
// console.log(`You have 50%`);
// break;

// case 40:
// console.log(`You have 40%`);
// break;

// case 30:
// console.log(`You have 30%`);
// break;

// case 20:
// console.log(`You have 20%`);
// break;

// case 10:
// console.log(`You have 10%`);
// break;

// default:
// console.log(`You have room to improve.`);
// break;

// }

// let marks = 85;

// switch (true) {

// case 100:
//     console.log('You ahve outdone yourself')
//     break;

// case (marks >= 90 && marks < 100):
//     console.log('You have outdone yourself 90 times over')
//     break;

// case (marks >= 80 && marks < 90):
//     console.log('You have outdone yourself 80 times over')
//     break;

// default:
//     console.log('The is no hope, I am sorry')
//     break    

// }

// Loops

// For Loop
// const myCars = [
// 'Toyota',
// 'BMW',
// 'Mazda'
// ];

// let myCar = {
//     make: 'Toyota',
//     model: 'Corolla',
//     year: '1996'
// }; 

// for (let index = 0; index < myCars.length; index++){
//     console.log(myCars[0]);
// };

// For In Loop

// let myCar = {
//     make: 'Toyota' ,
//     model: 'Corolla',
//     year: '1996',
//     colors: [ 'red', 'blue', 'white']

// };

// The declared variable (key), represents the index value or properties within an array 
// for(const key in myCar) {
//     console.log(key, myCar[key]);
// }

// For Of Loop

// const myCars = [
// 'Toyota',
// 'BMW',
// 'Mazda',
// 'Mercedes'
// ];

// The declared variable (y), represents elements within an array 
// for  (const y of myCars) {
//     console.log(y);
// }

// While Loop

// counter 
// let cnt = 0;

// while(cnt < 10) {
//     console.log(cnt);
//     cnt++;
// }

// Do While 

// let cnt = 0;

// let numbers = [8, 5 ,3 , 6];

// do {
// console.log(numbers[cnt]);
// cnt++;
// }
// while(cnt < numbers.length);

// Functions

// let x = 10;
// let y = 9;

// function add() {
//   let x = parseInt (document.getElementById('firstNumber').value)
//   let y = parseInt (document.getElementById('secondNumber').value)
//   console.log(x + y);

//   Creating an html element in js 
//    document.write(`<button onclick='add()'>=</button>`)
// }

// Factory Function 

// let person1 = {

// name: 'Jamie-Lee',
// surname: 'Kinnear',
// age: 21

// }
// let person2 = {

// name: 'Jane',
// surname: 'Doe',
// age: 21

// }

// function createPeople(name, surname, age) {
//     return{
//         name,
//         surname,
//         age
//     }
// }

// let person1 = createPeople('Jamie-Lee', 'Kinnear', 21);
// console.log(person1);

// Constructor Function 

// function Person(name, surname, age){
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
// }

// let person1 = new Person('Jamie-Lee', 'Kinnear', 21);
// console.log(person1);

// OnClick 

// Query Selector allows you to select IDs, Classes and Tags within html  

// function addition(e) {
//     e.preventDefault();
//     let numb1 = document.querySelector('#numb1').value;
//     let numb2 = document.querySelector('#numb2').value;
//     let output = document.querySelector('#output');
//     output.innerText = eval(`${numb1}+${numb2}`);
// }

// Event Listener 

let output = document.querySelector('button');
output.addEventListener('click', (e) => {
    e.preventDefault();
    let numb1 = document.querySelector('#numb1').value;
    let numb2 = document.querySelector('#numb2').value;
    let output = document.querySelector('#output');
    output.innerText = eval(`${numb1}+${numb2}`);
})








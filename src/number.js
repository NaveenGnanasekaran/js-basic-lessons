/* eslint-disable*/
// const age = 100;
// const money = 1000.50;
// console.log(typeof age); //number
// console.log(typeof money);//number
// console.log("10" - "10");
//math helper methods:
// console.log(Math.round(2.2));
// console.log(Math.floor(5.6));
// console.log(Math.ceil(8.4));
// console.log(Math.random());

// const sweets = 20;
// const kids = 3;
// const eachkids = Math.floor(sweets/kids);
// console.log(eachkids);
// const leftsweets = sweets % kids ;
// console.log(leftsweets)
// --------------------

// let x = 2 ** 3;
// console.log(x);
// x = Math.pow(5,4);
// console.log(x)
// --------------------
// console.log(0.1 + 0.2);//issue not noted

// let costofproduct = 100.95;
// let costOfproduct = 10095; //in paise
// console.log(typeof -Infinity)
// console.log(typeof +Infinity)
// console.log(typeof Infinity)
// let result = 10 / 'hello';
// console.log(result);
// console.log(typeof NaN)
// -----------------------------------
let x = 100;
let result = Number.isInteger(x);
console.log(`is x  a number: ${result}`);
let y = "abcd"
result = Number.isInteger(y);
console.log(`is y  a number: ${result}`);

result = (typeof y === 'string');
console.log(`is y  a string: ${result}`);
let flag = true;
result = (typeof flag === 'boolean');
console.log(`is flag a boolean: ${result}`);
let nos = [1,2,3,4,5];
result = (typeof nos === 'object');
console.log(`is nos an object : ${result}`);






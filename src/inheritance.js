/* eslint-disable*/
// const o = new Object();
// const a = new Array();
// const d = new Date();
// const f1 = function(){
//     console.log('The cow jumped over the moon');
// };
// console.log("Date = " + d);
// f1();
// // ---
// const o1 = Object.create({x: 100, y: 200});
// console.log('x='+ o1.x + 'y='+ o1.y);
// console.log(o1);

// const o2 = Object.create(null);
// const o3 = Object.create(Object.prototype);
// const o3 = new Object();
// const o3 ={};
// console.log(o2);
// console.log(o3);
// function getchild(parent) {
//   if (parent == null) throw TypeError();
//   return Object.create(parent);
// }
// let o4 = { x: "don't change this value" };
// console.log(o4.x);
// let p = getchild(o4);
// console.log(p.x);
// o4 = null;
// p = getchild(o4); //Object.create(null);
// console.log(p);

// Object.prototype = 0;
// console.log(Object)
let o5 = {};
console.log(o5);
o5.x = 100;
console.log(o5);
// p = getchild(o5);
// console.log(p);
// p.y = 200;
// let q = getchild(p);
// q.z= 300;
// console.log(q);
// console.log("q.x + q.y + q.z" + (q.x + q.y + q.z));
// console.log("p.x + p.y " + (p.x + p.y ));
// console.log("o5.x " + (o5.x));

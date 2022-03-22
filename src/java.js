/* eslint-disable*/

let book = {
  'main title': 'Javascript',
  subtitle: 'The definitive guide',
  for: ' all audience',
  author: {
    firstname: 'Donald',
    surname: 'Duck',
  },
};
// let len = undefined;
// let books = null;
// if(books) {
//     if(book.subtitle){
//     len = book.subtitle.length;
//     console.log(len);
//     }
//     else{
//     console.log("book.subttile undefined:");
//     }
// }
// else{
//     console.log("book is null");
// }
// len = book && book.subtitle && book.subtitle.length;
// if (len) console.log(len);
// // -----
// console.log(book.author);
// delete book.author;
// console.log(book.author);

let o6 = { x: 100 };
console.log(o6.x);
delete o6.x;
console.log(o6.x);
console.log(o6.toString);
delete o6.toString;

delete Object.prototype;
var a = 1;
delete this.a;
function f1() {}
delete this.f1;
console.log(a);

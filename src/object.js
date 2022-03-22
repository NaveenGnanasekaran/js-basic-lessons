/* eslint-disable  */
const person = {
  first: 'Naveen', //here first is property
  last: 'gnanasekaran',
  age: 100,
};
console.log(person.first);
console.log(person.last);
console.log(person.age);
person.first = 'tom';
person.last = 'jerry';
console.log(person.first);
console.log(person.last);
person.last = null;
console.log(person.last);

const empty = {};
const point = {
  x: 10,
  y: 50,
};
const point2 = {
  x: point.x,
  y: point.y + 1,
};
const book = {
  'main title': 'javascript',
  'sub-title': 'Guide to javascript for beginners',
  for: 'students', //reserves key word
  author: {
    first: 'naveen',
    last: 'gnanasekaran',
  },
};
console.log(book['main title']);
console.log(book['sub-title']);
console.log(book['for']);
console.log(book.author.first);
console.log(book.author.last);
// console.log(book.sub-title);
console.log(book.for);

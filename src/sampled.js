/* eslint-disable semi */
function addNumbers (a, b) {
  return a + b
}
// eslint-disable-next-line semi
/* eslint no-use-before-define: "error" */
console.log(`2 + 3 => ${addNumbers(2, 3)}`);

function multiplyNumbers (a, b) {
  return a * b;
}
console.log(`20 * 30 = ${multiplyNumbers(20, 30)}`);

console.log(`20 * 30 => ${multiplyNumbers(20, 30)}`);

function dividetwo (a, b) {
  return a / b
}

console.log(`${dividetwo(4, 2)}`);

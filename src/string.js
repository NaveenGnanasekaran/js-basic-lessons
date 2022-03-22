/* eslint-disable camelcase */
/* eslint-disable no-useless-escape */
/* eslint-disable semi */
/* eslint-disable quotes */
const my_name = 'Thunder'
const mid = 'lab'
const last = 'lab'

console.log(my_name)
console.log(last)
console.log(mid)
// eslint-disable-next-line no-useless-escape
const sentence = `she\'s so "cool"`
console.log(sentence)
const sentence1 = "she's so cool"
console.log(sentence1);
const sentence2 = `shes\'s so "cool"`;
console.log(sentence2);
const sentence3 = "she's so \"cool\"";
console.log(sentence3);

// multi line string using single quote doesn't work

const song1 = `i like
         ARR songs and 
         Anirudh songs`;
console.log(song1);

const hello3 = 'hello my name is ' + my_name + ".nice to meet you";
console.log(hello3);
const hello4 = `hello my name is  ${'my_name'} .nice to meet you`;
console.log(hello4);

const html = `
<div>
    <h2>${my_name}</h2>
    <p>${hello3}</p>
</div>
`;
console.log(html);
// document.body.innerHTML = html;

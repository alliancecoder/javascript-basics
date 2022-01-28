import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----
// String Literal - preferred
console.log(String.prototype);

console.log('Pizza');
console.log("Pizza"); // same
console.log('Pizza \'is hot\'');  // escaping
console.log('Pizza "is hot"');

const pizza = 'Pepperoni';
console.log('Pizza is ' + pizza); // concat
console.log(`Pizza is ${pizza}!`); // same using ` es6
console.log(`
Pizza is:
${pizza}!
`); // multi-line is preserved

// Function and Constructor Syntax
console.log(String(55 + 11)); // 66
console.log(String(55 + '11')); // 5511 String > Number

console.log(new String(55));
/**
 * String { "55" }
 *      0: "5"
 *      1: "5"
 *      length: 2
 */
import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----
// Type Checking
console.log(typeof 99); // number
// note it is a string type
const value = 99;
if (typeof value === 'number') {
    console.log('TRUE: Though a constant like 99 would cause an eslint error e.g., true is always true 99 is obviously a number');
}

// other methods
// -- instanceof
console.log(99 instanceof Number); // false it is a literal value 
console.log(new Number('99') instanceof Number); // true Number { 99 }

// Object.toString
console.log({}.toString()); // [object Object]
console.log(Object.prototype.toString()); // [object Object]
console.log(Object.prototype.toString.call(99)); // [object Number] safest way
console.log(Object.prototype.toString.call(99).slice(8, -1) === 'Number'); // true
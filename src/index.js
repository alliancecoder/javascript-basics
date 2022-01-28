import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----
// Numbers in JS
const literalNumber = 99;
console.log(literalNumber);

//function
console.log(Number(55));
console.log(Number('33'));
console.log(Number('44px')); // NaN

console.log(new Number(66)); // creates object
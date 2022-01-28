import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----
// Number Methods
console.log(Number.prototype);
console.log(99..toFixed(4)); // double dot fixes Identifier directly after number (99).toFixed(4) also works "99.0000"
console.log(parseFloat((99.123456789).toFixed(4))); // string to actual number 99.1235
console.log(parseFloat((99.123456789).toPrecision(5))); // string to actual number 99.123

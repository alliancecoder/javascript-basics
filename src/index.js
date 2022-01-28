import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----
// NaN (not a number)
const result = Number('55px');

// isNaN (tests for NaN ergo brokenish)
console.log(isNaN(result)); // true
console.log(isNaN('I am a string!')); // true

// updated method of Number checks for nummber
console.log(Number.isNaN(result)); // true
console.log(Number.isNaN('I am a string!')); // false

// other methods of Number
// Number.isInteger()
// Number.NaN returns NaN locally scoped not Globally scoped.
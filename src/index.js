import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----
// String Immutability
const immutableString = 'I shall not change!';
const uppercaseString = immutableString.toUpperCase();

console.log(immutableString, uppercaseString);

// exmaple proof of by copy
const anotherImmutable = "lowercase";
console.log(anotherImmutable.toUpperCase(), anotherImmutable); // the orignal isn't altered just the representation.
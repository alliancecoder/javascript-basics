import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----
// imutableNumbers
// Numbers are Copied by Value, not ref
const immutableNumber = 99; // never touched
let referenceNumber = immutableNumber;
referenceNumber = 44;
console.log(immutableNumber);
console.log(referenceNumber);
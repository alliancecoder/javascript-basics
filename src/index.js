import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----
// Integers and Floating Point Numbers (fpn)

console.log(0.1 + 0.2 === 3); // false due to fpn
console.log(0.1 + 0.2); // 0.30000000000000004

// price debackle
const price = 9.33;
const quantity = 3;
console.log(price * quantity); // 27.990000000000002

// solved by integer conversion
const anotherPrice = 9.33 * 100;
const anotherQuantity = 3;
console.log(anotherPrice * anotherQuantity / 100); // 27.99
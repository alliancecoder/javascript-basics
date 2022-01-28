import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----
// String Methods
console.log(String.prototype);

console.log('Pepperoni'.indexOf('P'));
console.log('Pepperoni'.includes('P'));

console.log('Pepperoni'.replace('oni', 'fire'));
console.log('Pepperoni'.replace(/oni$/, 'fire'));

console.log('Pepperoni'.slice(2, -3));

console.log('Pepperoni~Plain'.split('~')[1]);
console.log('Pepperoni~Plain'.split(/~/)[1]);

console.log('   4444 5555  ');
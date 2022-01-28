import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----
// parsing strings to numbers
// parseInt() and parseFloat()

console.log(parseInt('55px', 10)); // the 10 is base10 which guarantees number identification (I.e., not hex etc)
console.log(parseInt('100110', 2)); // base 2 (binary) 38

// decimals
console.log(parseInt('55.999px', 10)); // still 55
console.log(parseFloat('55.999px', 10)); // 55.999

// the 'e'
console.log(Number(55e10)); // 550000000000 I.e. SN 55 * 10^10
// + OPERATOR works like Number()
console.log(+'55.999'); // 55.999
console.log(9 + +'55.999'); // 64.999 same a 9 + the operator Number(55.999)
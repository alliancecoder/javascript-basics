import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// --------------------------------------------------
// Function Rerurn values
// --------------------------------------------------

function makeCarPrice(...params) {
    const total = params.reduce((prev, next) => prev + next);
    return total;
}
const makeCarPriceArrow = (...params) => params.reduce((prev, next) => prev + next);

// can call functions in backticks
console.log(`Total Price: $${makeCarPrice(11, 22, 33, 44, 55).toFixed(2)}`); // Total Price: $165.00
console.log(`Total Price: $${makeCarPriceArrow(99, 77, 44).toFixed(2)}`); // Total Price: $220.00
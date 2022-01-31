import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// --------------------------------------------------
// Function Rerurn values
// --------------------------------------------------

const makeCarPrice = (...params) => {
    return params.reduce((prev, next) => prev + next);
}

const totalPrice = makeCarPrice(11, 22, 33, 44, 55);
console.log(`Total Price: $${totalPrice.toFixed(2)}`); // Total Price: $165.00
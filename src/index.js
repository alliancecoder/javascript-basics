import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// --------------------------------------------------
// Function Rerurn values
// --------------------------------------------------

function makeCarPrice(...params) {
    const total = params.reduce((prev, next) => prev + next)
    console.log(total);
    return; // <- this is an implicit return which returns undefined because we aren't telling it what to return.
}

const totalPrice = makeCarPrice(11, 22, 33, 44, 55);
console.log(totalPrice); //undefined
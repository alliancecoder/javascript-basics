import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// --------------------------------------------------
// Function Rest Parameters and 
// --------------------------------------------------


// old method
function makeCarPrice() {
    console.log(arguments, Array.isArray(arguments)); // Array Like list | Arguments { 0: 11, 1: 44, 2: 55, 3: 99, … } false
    // convert to array
    const total = Array.from(arguments).reduce((prev, next) => prev + next);
    console.log(total);
}

makeCarPrice(11, 44 ,55, 99, 22);

// new mathod rest parameter using the spreader
function makeCarPriceRest(numberOne, ...params) {
    console.log(numberOne, params);
    console.log(Array.isArray(params));
    // removing the numberOne we can reduce to:
    // const total = params.reduce((prev, next) => prev + next);
}

makeCarPriceRest(11, 44 ,55, 99, 22);
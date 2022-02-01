import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// --------------------------------------------------
// Functions Contect (this)
// --------------------------------------------------

const firstCar = { id: 'XAT5416' };
const secondCar = { id: 'XAT5417' };

function carPartId() {
    console.log(`${this.id}`);
}

// The call() method calls a function with a given this value and arguments provided individually. MDN
carPartId.call(firstCar);
carPartId.call(secondCar);
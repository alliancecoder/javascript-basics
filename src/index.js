import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// --------------------------------------------------
// Functions Contect (this)
// --------------------------------------------------

const firstCar = { id: 'XAT5416' };
const secondCar = { id: 'XAT5417' };
const thirdCar = { id: 'XAT5418' };

function carPartId(name, quantity) {
    console.log(`${this.id}_${name}_${quantity}`);
}

const boundThirdCar = carPartId.bind(thirdCar);
boundThirdCar('WINDSCREEN', 99);

// binding anchors the 'this' contxt to the new method

// The call() method calls a function with a given this value and arguments provided individually. MDN
// call = c = commas
carPartId.call(firstCar, 'LEFT_DOOR', 12); // first param this, second passes
// apply = a = array
carPartId.apply(secondCar, ['RIGHT_DOOR', 21]); // first this, must be an array for second arg
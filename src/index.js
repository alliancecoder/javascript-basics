import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// --------------------------------------------------
// Function IIFE immediatley Invoked Function Expression
// --------------------------------------------------

// expression by wrapping in parens and calling it immediately
// like JQuery
const carPartId = (function (id) {
    const theId = `CAR_PART_${id}`;
    return function(name) {
        return `${theId}_${name}`;
    };
})('XAT5461');

// Encapsulation of ID
console.log(carPartId('LEFT_DOOR'));
console.log(carPartId('RIGHT_DOOR'));
console.log(carPartId('WINDSCREEN'));
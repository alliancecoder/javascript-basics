import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// --------------------------------------------------
// Function Scope
// --------------------------------------------------

function makeCarPartId(id) {
    const theId = `CAR_PART_${id}`;
    // internal function has access to the function scoped vars.
    return function(name) {
        return `${theId}_${name.toUpperCase()}`
    };
}

const carPartId = makeCarPartId('x90wece998');
// the function returns access to the inner function so we can call both as a cascading call
console.log(carPartId('Left_Door')); 
console.log(carPartId('Right_Door')); 
console.log(carPartId('Windscreen')); 

const anotherCarPartId = makeCarPartId('d20399df');
// the function returns access to the inner function so we can call both as a cascading call
console.log(anotherCarPartId('Left_Door')); 
console.log(anotherCarPartId('Right_Door')); 
console.log(anotherCarPartId('Windscreen')); 
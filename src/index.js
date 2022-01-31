import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// --------------------------------------------------
// Function Scope
// --------------------------------------------------

function makeCarPartId(id) {
    const theId = `CAR_PART_${id}`;
    return theId;
}

const carPartId = makeCarPartId('x90wece998');
console.log(carPartId);
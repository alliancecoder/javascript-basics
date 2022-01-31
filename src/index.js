import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// --------------------------------------------------
// Function Scope
// --------------------------------------------------

// scope 1 visible in file
const anotherId = '1234abcd';


function makeCarPartId(id) {
    // scope 2 visible in function only
    console.log(id, anotherId);
}

makeCarPartId('x90wece998');
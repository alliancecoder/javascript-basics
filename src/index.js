import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// --------------------------------------------------
// Function Parameters and Defaults
// --------------------------------------------------

// name = parameter
// the = 'Oldsmobile' provides and es6 default
function makeCar(name = 'Oldsmobile') {
    // defaults in block
    // name = name || 'Oldsmobile';
    // if (!name) {
    //     name = 'Oldsmobile';
    // }
    console.log(`Making car: ${name.toUpperCase()}`);
}

// strings = arguments
makeCar('Porsche');
makeCar('Ferrari');
makeCar();
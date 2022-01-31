import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// --------------------------------------------------
// Functions and Callbacks
// --------------------------------------------------

function carPartId(name, fn) {
    const theId = `CAR_PART_XAT5461`;
    return fn(`${theId}_${name}`);
}

const carPart = carPartId('LEFT_DOOR', function(id) {
    return `Car Part Id: ${id}`;
});

console.log(carPart);

/**
 * Here the carPartId calls the function
 * The id is created
 * the passed fn is then called and returned to the calling function
 * the original caller is then able to return or trenasform the returned data
 * and we can log the result.
 */
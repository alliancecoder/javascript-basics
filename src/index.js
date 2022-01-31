import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// --------------------------------------------------
// Functions and Callbacks
// --------------------------------------------------

function carPartId(name, fn) {
    const theId = `CAR_PART_XAT5461`;
    fn(theId);
}

carPartId('LEFT_DOOR', function(id) {
    console.log(`Car Part Id: ${id}`);
});

/**
 * Here the carPartId calls the function
 * The id is created
 * the passed fn is then called with the id
 * the original caller is then able to log the ID
 * CALLBACK
 */
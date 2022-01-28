import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// --------------------------------------------------
// Functions
// --------------------------------------------------

// hoisting tests
console.log(makeCar);
console.log(makeCarExpression);
console.log(makeCarArrow);
console.log(makeCarShorthand);

// Option One declaration
function makeCar() {
    console.log('Making car...');
}
// calling function
makeCar();

// Option Two Function Expression (anonymous or named versions)
const makeCarExpression = function () { }
console.log(makeCarExpression.name);

// Option Three Arrow Function
const makeCarArrow = () => {
    console.log('Making car inside Arrow...');
};
makeCarArrow();

const makeCarShorthand = () => console.log('Short');
makeCarShorthand();
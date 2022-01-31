import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// --------------------------------------------------
// Function IIFE immediatley Invoked Function Expression
// --------------------------------------------------

// expression by wrapping in parens and calling it immediately
// like JQuery
const carPartId = (function (id) {
    console.log(id);
})('id-suplied-here');

// notice the lack of the method paren - they are at the end of the expression
console.log(carPartId);
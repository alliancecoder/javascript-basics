import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// --------------------------------------------------
// Object Literal, Function and Constructor Syntax
// --------------------------------------------------

// object literal
const drink = {
    id: 'XAT5621',
    name: 'Root Beer',
    price: 99
};

const drinkReference = drink;
drinkReference.name = 'Sunkist';

console.log(drink);

/**
 * Two objects are never the same {} === {} is false
 * Unless you are comparing a byRef like drink === drinkReference
 */
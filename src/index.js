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
 * Objects are pointers (By Reference)
 */
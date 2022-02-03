import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// --------------------------------------------------
// Properties, Methods and Values
// --------------------------------------------------

// ES6
const drink = {
    id: 'XAT5621',
    name: 'Root Beer',
    price: 99,
    getDrinkDetails: () => `Drink ${this.name} (${this.price})`,
};

console.log(drink.getDrinkDetails());

/**
 * Using arrow functions breaks thge use of this
 * because in the arrowe function 'this' is determined by 
 * ther calling method
 */
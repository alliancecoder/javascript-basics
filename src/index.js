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
    getDrinkDetails() {
        return `Drink ${this.name} (${this.price})`
    }
};

// PREVIOUS METHOD (babel)
const oldDrink = {
    id: 'XAT5621',
    name: 'Root Beer',
    price: 99,
    getDrinkDetails: function () {
        return `Drink ${this.name} (${this.price})`
    }
};

console.log(drink.getDrinkDetails());
console.log(oldDrink.getDrinkDetails());

/**
 * Two objects are never the same {} === {} is false
 * Unless you are comparing a byRef like drink === drinkReference
 */
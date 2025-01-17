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
    },
    'complex property': 'value of complex property'
};

console.log(drink.getDrinkDetails());

// logging properties uses the key
console.log(drink['complex property']);
console.log(drink.name);

/**
 * KV Pairs are stored like 'key': 'value' so both works
 * the use of the space requires the '' within the key
 * logging complex properties uses the key
 * logging simple keys can use the key or dot notation
 */
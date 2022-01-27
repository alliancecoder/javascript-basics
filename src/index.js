import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----
// Conditional Login | not quite true or false

console.log(1 == 1);        // equals but can be different types    true
console.log(1 === 1);       // equals but must be of same type      true

console.log(1 == '1');      // equals but can be different types    true (coersion - converted to strings for comparison)
console.log(1 === '1');     // equals but must be of same type      false

// Boolean object
console.log(Boolean(true)); // true
console.log(Boolean(''));   // false - length 0
console.log(Boolean('a'));  // true - length > 0

// !! converts to boolean (negation operator or double bang ( i.e. not not ))
console.log(!!true);        // true

// object
console.log(!!{});          // true
console.log(!![]);          // true
console.log(!!0);           // false
console.log(!!42);          // true != 0

// falsy
console.log(!!false);       // false
console.log(!!null);        // false
console.log(!!undefined);   // false
console.log(!!0);           // false
console.log(!!NaN);           // false
import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----
// String Properties and Indexes
console.log('Pepperoni'.length); // 9
console.log('Pepperoni'['length']); // 9
console.log('Pepperoni'[0]); // 9
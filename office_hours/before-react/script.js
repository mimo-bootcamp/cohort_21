// js concepts that are fundemtal to react : 

// Arrow Functions
// Ternary Operators
// Objects
// Map, Filter...
// Async-Await, Promises, Fetch


function byTwo(n) {

    return n * 2
}

const logTooShort = (n) => console.log('password too short')


logTooShort();

// Ternary Operators

// conditional rendering
let theme = 'dark'

const cardDiv = document.querySelector('#card');

(theme === 'dark') ?  cardDiv.className = 'dark' : cardDiv.className = 'light';


const colors = ['yellow', 'black', 'green', 'blue', 'red', 'orange', 'purple'];


console.log(colors.map((color) => `<li> ${color} </li>` ))

console.log(colors.filter((color) => color !== 'blue' ))
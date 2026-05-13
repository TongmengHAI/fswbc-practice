// data types
// global variables
var name = "John"; // string
let age = 30; // number
const isStudent = true; // boolean

var students = ["Alice", "Bob", "Charlie"]; // array
var person = { // object
    // key : value pairs
    name: "John",
    age: 30,
    isStudent: true
};

var person = [
    {
        name: "John",
        age: 30,
        isStudent: true
    },
    {
        name: "Alice",
        age: 25,
        isStudent: false
    }
];


// functions
function greet() {
    console.log("Hello, " + name + "!");
}

function add(a, b) {
    return a + b;
}

// greet(); // Call the function
console.log(add(5, 10));

const sumFunction = (a, b) => {
    return a + b;
}; // Arrow function







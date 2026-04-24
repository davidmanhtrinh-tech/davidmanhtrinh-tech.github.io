// variables - boxes to store value
// let & const - one changes the value/ other one can't change it
// types of variables - numeric, string, boolean, null, underfined, objeced and arrays

//NUMERIC - used for math operations
let a = 10;

//STRING - Text containing alphanumeric value
const name = "David";

//BOOLEAN - True of false
let isItRaining = false;

//OBJECT - Groups up variables of the same category, properties, etc...
let student = {
  name: "David",
  id: 4089410,
};
// student.name / student.id - to access these objects

//ARRAYS - Collection but they all are of the same type
let grades = [34, 35, 36, 37];
let names = ["peter", "piper"];
//For example, if you wish to access lets say... 36 in the grades array - You input -- grades.length--
//grades [2] - 68 IMP: arrays start at 0

//CONDITIONAL STATEMENT
// if (condtion) {true -> execute this}
// else {false -> execute this}

if (isItRaining) {
  console.log("yes it is");
} else {
  console.log("no, it isn't");
}

//LOOPS - Iterate through a function or set of instructions
// for loop
for (let i = 0; i < names.length; i++) {
  console.log("Hello", names[i]);
}

//FUNCTIONS -
let b = 20;
function add(a, b) {
  let c = a + b;
  console.log("value of c", c);
  return c;
} // this is called defining a function

add(a, b); // calling a function - function is executed when it's called
add(a, b);
add(4, 5);
add(a, 50);
let c = add(a, 50);
console.log("value of c", c);

function greet(name) {
  let greetings = "hello" + name;
  return greetings;
}

let welcome = greet("alice");
console.log(welcome);
console.log(greet("Oda"));

//DOM - Document Object Model - {Window, Document, Navigator}

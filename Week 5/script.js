console.log("Hi");
//this is a comment - rohit, 2026//

//Data types within JS//
//let is for defining varibales or creating boxes whose value change
// const is for defining boxes for variables whose is constant
// numbers, they can be both positive or negative as well as fractions

let myStudentId = 4089410;
console.log(myStudentId);
myStudentId = 4089410;
console.log(myStudentId);
let myBudget = 30.57;
console.log("I can spend today: $", myBudget);
//+ = addition, - = subtraction, * = multiplication, / = division
{
  let a = 20;
  let b = 40;
  let c = a + b;
  console.log("total value", c);
}

let x = 40;
if ((x = 40)) {
  console.log(true);
} else {
  console.log(false);
}

//boolean - used for condition check//
let isItFriday = true;
let isItPublicHoliday = false;

if (isItFriday) {
  console.log("ggs no heals");
} else {
  console.log("go back to lobby");
}

//Null and Undefined - Null = empty box / Undefined = blind unknown box//
let iAmUnknown;
let emptyBox = null;
console.log(emptyBox);

//strings to store alphanumetic value including html//

const myName = "David Trinh";
console.log("Hello", myName);
const myName2 = "Lebron James";
console.log("Hello", myName2);

let myCountry = "Vietnam";
console.log("GOOD MORNING", myCountry);

const myRecord = { myName: "DavidTrinh", id: 4089410, city: "Melbourne" };
console.log(myRecord);
console.log(myRecord.id);
console.log(myRecord.myName);

const grade1 = 87;
const grade2 = 84;

//arrays - group elements of similar category//
const grades = [67, 84, 76, 80, 45];
//array starts at 0, not 1//
const cities = ["melb", "syd", "bris"];
console.log("grade of student 3", grades[3]);
console.log("second city I visited was", cities[2]);

const students = ["alice", "ciel", "david", "bob", "jessie"];

for (let i = 0; i < students.length; i++) {
  console.log("hello", students[i]);
}

const expenditures = [34, 4, 78, 5, 10];
let totalSpend = 0;
console.log(expenditures.length);
for (let i = 0; i < expenditures.length; i++) {
  totalSpend = totalSpend + expenditures[i];
  console.log("expenditure so far", totalSpend);
}
console.log("total expenditure is:", totalSpend);

let shoppingCart = [
  { name: "T-shirt", price: 20 },
  { name: "Jeans", price: 50 },
  { name: "Sneakers", price: 80 },
  { name: "Backpack", price: 30 },
];
console.log(shoppingCart[0].price);

const shopingCart = [20, 50, 80, , 30];
let purchases = 0;
console.log(shoppingCart.length);
for (let i = 0; i < shoppingCart.length; i++) {
  purchases = purchases + shoppingCart[i].price;
  console.log(
    "purchased:",
    shoppingCart[i].name,
    "for:$",
    shoppingCart[i].price,
  );
  console.log("total purchase is : ", purchases);
  let discount = 0;
  if (purchases > 100) {
    discount = purchases - 10 * (purchases / 100);
  }
}

const heading = document.querySelector("h1");
console.log(heading);
console.log(heading.textContent);
heading.textContent = "I already know DOM";

const subheading = document.querySelectorAll("h2");
console.log(subheading);

for (let i = 0; i < subheading.length; i++) {
  console.log(subheading[i].textContent);
}

const blueItems = document.querySelectorAll(".blue-color");
console.log(blueItems);

const subHead = document.querySelector("#subhead-1");
console.log(subHead);

const myCat = document.querySelector("#my-cat");
const myButton = document.querySelector("#my-button");

function toggleMe() {
  myCat.classList.toggle("round");
}

const courseName = "Interactive Media";
const courseId = "";

const header = document.querySelector("header");
console.log(header);
console.log(header.innerHTML);

header.innerHTML = `
  <h3 class="blue-color">This is a new header</h3>
  <p>I am another para</p>
`;

console.log(myButton);

// corrected event listeners
myButton.addEventListener("click", toggleMe);
myCat.addEventListener("mouseover", addMe);
myCat.addEventListener("mouseout", removeMe);

//
function addMe() {
  myCat.classList.add("round");
  myButton.textContent = "clicked";
}

function removeMe() {
  myCat.classList.remove("round"); // was adding before
  myButton.textContent = "not clicked";
}

const myButton = document.querySelector("#my-button");
console.log(myButton);

const duck = document.querySelector("#duck");

duck.addEventListener("click", () => {
  duck.classList.toggle("fly");
});

myButton.addEventListener("click", doJump);

const duck = document.querySelector("#duck");

let clicked = false;

function doJump() {
  console.log("did you click me?");
  duck.style.translate = "0px -60px";
  clicked = true;
  console.log(clicked);
  if (clicked) {
    clicked = false;
  } else {
    duck.style.translate = "0px -60px";
    clicked = true;
  }

  console.log(clicked);
}

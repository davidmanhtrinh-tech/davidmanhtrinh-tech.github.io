function checkWeather() {
  const myTemp = document.querySelector("#myTemp");
  console.log(myTemp.value);
  const body = document.querySelector("body");
  const outer = document.querySelector("Outer");
  let temp = Number(myTemp.value);

  if (temp < 10) {
    console.log("It is quite cold today");
    body.style.backgroundColor = "grey";
  } else if (temp >= 10 && temp < 20) {
    console.log("it is nice weather today");
    body.style.backgroundColor = "blue";
  } else if (temp >= 20 && temp < 30) {
    console.log("it is nice weather today");
    body.style.backgroundColor = "orange";
  } else if (temp >= 30 && temp < 40) {
    console.log("it is nice weather today");
    body.style.backgroundColor = "red";
  }
}

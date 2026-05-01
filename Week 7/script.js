// first to get access to the audio element
const airportAudio = document.querySelector("#airport-audio");
console.log(airportAudio);

// let us access the video too
const myVideo = document.querySelector("#my-video");
console.log(myVideo);

// access pop audio
const popSound = document.querySelector("#pop-audio");
console.log(popSound);

// access the button
const popButton = document.querySelector("#pop-button");
console.log(popButton);

popButton.addEventListener("click", popAudio);

function popAudio() {
  popSound.play();
}

function pauseAudio() {
  //airportAudio.pause();
  myVideo.pause();
}

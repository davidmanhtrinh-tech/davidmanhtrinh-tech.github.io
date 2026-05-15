// first to get access to the audio element
const airportAudio = document.querySelector("#my-video");
console.log(myVideo);

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

// access the play pause button
const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

// access the image
const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

// add a click event listener to the button
playPauseButton.addEventListener("click", toggleVideo);

function toggleVideo() {
  if (myVideo.paused === true || myVideo.ended === true) {
    myVideo.play();
    playPauseImg.src = "";
  } else {
    myVideo.pause();
    playPauseImg.src = "";
  }
}

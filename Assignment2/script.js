const audio = document.querySelector("#custom-audio-player");
const timer = document.querySelector("#timer");
const cassette = document.querySelector("#cassette-img");
const realTime = document.querySelector("#real-time");
const quoteText = document.querySelector("#quote-text");
const themeButtons = document.querySelectorAll(".theme-image-btn");
const backgroundFade = document.querySelector("#background-fade");

// These are quotes that I've referenced from books I've read and media i've consumed in the past. They will update and transition from one to the next after a specific time interval

const quotes = [
  "“The best of life exists beyond the thing we are encouraged to crave.”",
  "“Rest is not a reward. It is part of the process.”",
  "“The world can surprise us, but we can surprise ourselves too.”",
  "“Movement isn't progress if we are heading in the wrong direction.”",
  "“Peace is found in the pauses between noise.”",
  "“Happiness is an accident of self acceptance.”",
  "“Hope is available to all.”",
  "“You don't become a good person by believing that you are a bad one.”",
  "“We are always bigger than the pain we feel.”",
  "“The best thing about rock bottom is the rock part.”",
];

let currentQuote = 0;

// This is where the quotes will rotate around one after the other - I wanted this component to be visually tame, enocouraging, and motivating - playing further into the concept of calm and tenderness of the track.

function changeQuote() {
  if (!quoteText) {
    return;
  }

  quoteText.classList.add("fade-out");

  setTimeout(function () {
    currentQuote++;

    if (currentQuote >= quotes.length) {
      currentQuote = 0;
    }

    quoteText.innerHTML =
      `<span class="quote-dot">●</span> ` + quotes[currentQuote];

    quoteText.classList.remove("fade-out");
  }, 800);
}

if (quoteText) {
  setInterval(changeQuote, 6000);
}

// This is where the AEST clock is operating,

function updateMelbourneClock() {
  if (!realTime) {
    return;
  }

  const now = new Date();

  const melbourneTime = now.toLocaleTimeString("en-AU", {
    timeZone: "Australia/Melbourne",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  realTime.textContent = melbourneTime.toLowerCase();
}

if (realTime) {
  setInterval(updateMelbourneClock, 1000);
  updateMelbourneClock();
}

// This is the audio timer, it will play and pause as well as stop at the current time. It shall reset back to 00:00 once fully played.

function formatTime(time) {
  if (isNaN(time)) {
    return "0:00";
  }

  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function updateTimer() {
  if (!audio || !timer) {
    return;
  }

  const currentTime = formatTime(audio.currentTime);
  const duration = formatTime(audio.duration);

  timer.textContent = `${currentTime} / ${duration}`;
}

if (audio) {
  audio.addEventListener("timeupdate", updateTimer);
  audio.addEventListener("loadedmetadata", updateTimer);

  audio.addEventListener("ended", function () {
    if (cassette) {
      cassette.classList.remove("shake");
    }
  });
}

// This is the play button - it will ensure that the audio is playing. The casette tape will shake once the audio starts playing as an additional indicator that it is functional and working.

function playAudio() {
  if (!audio || !cassette) {
    return;
  }

  audio.play();
  cassette.classList.add("shake");
}

// Vice versa here, the pause button will immediately stop the track from playing - causing the tape player to automatically freeze from shaking - back to its original state.

function pauseAudio() {
  if (!audio || !cassette) {
    return;
  }

  audio.pause();
  cassette.classList.remove("shake");
}

// This section is where the backgrounds will alternate between each other upon clicking any coloured box. The integratation of the four backgrounds provides more options in accordance to mood and seasons, I wanted something refreshing and not flat.

themeButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (!backgroundFade) {
      return;
    }

    const theme = button.dataset.theme;

    let newBackground = "";

    if (theme === "cloud-theme") {
      newBackground = "url('Cloudy.png')";
    } else if (theme === "orange-theme") {
      newBackground = "url('rebirth.png')";
    } else if (theme === "blue-theme") {
      newBackground = "url('nighttime.png')";
    } else if (theme === "purple-theme") {
      newBackground = "url('nostalgia.png')";
    }

    backgroundFade.style.backgroundImage = newBackground;
    backgroundFade.classList.add("show");

    setTimeout(function () {
      document.body.className = "";
      document.body.classList.add(theme);
      backgroundFade.classList.remove("show");
    }, 1000);
  });
});

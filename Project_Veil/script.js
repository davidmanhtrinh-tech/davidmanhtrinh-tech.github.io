//This is where every character card be selected on the page//
const cards = document.querySelectorAll(".character-card");

//And this is where it loops each card individually with this command//
cards.forEach((card) => {
  //This is where you can find the video inside the current card//
  const video = card.querySelector(".character-video");

  if (!video) return;

  //When the mouse enters the card, it restarts and plays the video//
  card.addEventListener("mouseenter", () => {
    video.currentTime = 0;
    video.play();
  });

  //Same thing applies here but the reversal, when the mouse leaves the card - it pauses and resets the video//
  card.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });
});

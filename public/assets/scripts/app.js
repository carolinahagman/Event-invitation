let playBtn = document.querySelector(".play-button");
let video = document.querySelector("#video");

playBtn.addEventListener("click", (e) => {
  e.preventDefault();
  playBtn.classList.toggle("hidden");
  video.classList.toggle("darkened");
  video.play();
});

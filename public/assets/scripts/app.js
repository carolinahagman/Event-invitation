let playBtn = document.querySelector(".play");
let video = document.querySelector("#video");

playBtn.addEventListener("click", (e) => {
  e.preventDefault();
  playBtn.classList.toggle("hidden");
  video.classList.toggle("darkened");
  video.play();
});

const urlParams = new URLSearchParams(window.location.search);
const firstName = urlParams.get("firstname");
const lastName = urlParams.get("lastname");

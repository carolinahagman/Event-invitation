// Queryselectors
const playBtn = document.querySelector(".play");
const video = document.querySelector("#video");
const personalTitle = document.querySelector("#personal-title");
const nameField = document.querySelector("#name");
const emailField = document.querySelector("#email");
const addressField = document.querySelector("#address");
const openHoursImg = document.querySelector("#open-hours-img");
const contactImg = document.querySelector("#contact-img");

// Query param values
const urlParams = new URLSearchParams(window.location.search);
const firstName = urlParams.get("firstname");
const lastName = urlParams.get("lastname");
const email = urlParams.get("email");
const address = urlParams.get("address");

// Populate buy-ticket form
if (urlParams.has("firstname")) {
  personalTitle.innerHTML = `Välkommen ${firstName}`;
  if (urlParams.has("lastname")) {
    nameField.value = `${firstName} ${lastName}`;
  } else {
    nameField.value = firstName;
  }
}
if (urlParams.has("email")) {
  emailField.value = email;
}

if (urlParams.has("address")) {
  addressField.value = address;
}

// Play video on click
playBtn.addEventListener("click", (e) => {
  e.preventDefault();
  playBtn.classList.toggle("hidden");
  video.classList.toggle("darkened");
  video.play();
});

// Toggle darkened on images
contactImg.addEventListener("mouseover", (e) => {
  contactImg.classList.remove("darkened");
});
contactImg.addEventListener("mouseout", (e) => {
  contactImg.classList.add("darkened");
});
openHoursImg.addEventListener("mouseover", (e) => {
  openHoursImg.classList.remove("darkened");
});
openHoursImg.addEventListener("mouseout", (e) => {
  openHoursImg.classList.add("darkened");
});

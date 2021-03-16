// Queryselectors
const playBtn = document.querySelector(".play");
const video = document.querySelector("#video");
const personalTitle = document.querySelector("#personal-title");
const nameField = document.querySelector("#name");
const emailField = document.querySelector("#email");
const addressField = document.querySelector("#address");
const openHoursImg = document.querySelector("#open-hours-img");
const contactImg = document.querySelector("#contact-img");
const submitBtn = document.querySelector("#submit-btn");
const form = document.querySelector("#form");
const hamburgerMenu = document.querySelector("#menu-icon");
const hamCheckbox = document.querySelector("#ham-check");
const hamburgerLinks = document.querySelectorAll(".ham-links");
const sections = document.querySelectorAll("section");

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

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
});

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

hamburgerMenu.addEventListener("click", (e) => {
  console.log("click");
  hamburgerMenu.classList.toggle("ham-hidden");
});

hamCheckbox.addEventListener("click", (e) => {
  if (hamCheckbox.checked == true) {
    sections.forEach((el) => {
      el.style.pointerEvents = "none";
    });
  } else {
    sections.forEach((el) => {
      el.style.pointerEvents = "auto";
    });
  }
});

hamburgerLinks.forEach((el) => {
  el.addEventListener("click", (e) => {
    hamCheckbox.click();
  });
});

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
const hamburgerLinkButtons = document.querySelectorAll(".ham-links a");
const sections = document.querySelectorAll("section");
const likeBtn = document.querySelector("#like-btn");
const user = document.querySelector("#user");
const instagramImg = document.querySelector("#instagram-img");
const openHourBtn = document.querySelector("#open-hours-button");
const priceSection = document.querySelector("#prices");
const openHourSection = document.querySelector("#open-hours");
const preloader = document.querySelector(".preloader");
const spinner = document.querySelector(".preloader div");
const navPriceSection = document.querySelector("#price-section");
const confirmation = document.querySelector(".confirmation");

setTimeout(() => {
  preloader.classList.add("disappear");
  spinner.classList.add("disappear-spinner");
}, 1700);

// Query param values
const urlParams = new URLSearchParams(window.location.search);
const firstName = urlParams.get("firstname");
const lastName = urlParams.get("lastname");
const email = urlParams.get("email");
const address = urlParams.get("address");
const username = urlParams.get("username");

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

if (urlParams.has("username")) {
  user.innerHTML = username;
  instagramImg.src = "https://source.unsplash.com/collection/8678360/400x400";
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  confirmation.innerHTML =
    "Kul att du vill komma! Du får en bekräftelse till din mail";
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

//hamburgermenu
hamburgerMenu.addEventListener("click", (e) => {
  console.log("click");
  hamburgerMenu.classList.toggle("ham-hidden");
});

hamCheckbox.addEventListener("click", (e) => {
  if (hamCheckbox.checked == true) {
    sections.forEach((el) => {
      el.style.pointerEvents = "none";
    });
    hamburgerLinkButtons.forEach((el) => {
      el.style.pointerEvents = "auto";
    });
  } else {
    sections.forEach((el) => {
      el.style.pointerEvents = "auto";
    });

    hamburgerLinkButtons.forEach((el) => {
      el.style.pointerEvents = "none";
    });
  }
});

hamburgerLinks.forEach((el) => {
  el.addEventListener("click", (e) => {
    hamCheckbox.click();
  });
});
//'like' isntagram post
likeBtn.addEventListener("click", () => {
  likeBtn.classList.toggle("red-heart");
});
//open sections
openHourBtn.addEventListener("click", () => {
  if (
    priceSection.style.display == "none" &&
    openHourSection.style.display == "none"
  ) {
    priceSection.style.display = "flex";
    openHourSection.style.display = "flex";
    navPriceSection.scrollIntoView();
  } else {
    priceSection.style.display = "none";
    openHourSection.style.display = "none";
  }
});

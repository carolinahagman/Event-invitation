// Create the script tag, set the appropriate attributes
let script = document.createElement("script");
script.src = process.env.API_KEY;
script.async = true;

// Attach your callback function to the `window` object
window.initMap = function () {
  // JS API is loaded and available
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 59.317337064, lng: 18.08416633 },
    zoom: 15,
  });
};

// Append the 'script' element to 'head'
document.head.appendChild(script);

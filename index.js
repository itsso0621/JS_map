const country = {
  name: "Canada",
  flag: "https://restcountries.eu/data/can.svg",
  population: 36155487,
  latlng: [60.0, -95.0],
};
const countries = [];

const flagimg = document.querySelector("#flagimg");
const guessbtn = document.querySelector("#guessbtn");
// TODO: Edit line 14 via destructuring, to extract name, latitude, longitude
async function drawMap(country) {
  for (i = 0; i < countries.length; i++) {
    const res = await fetch("country.json");
    const data = await res.json();
    const countries = [...data];
    console.log(countries[i].name);
  }
  // * notice I used variable names latitude and longitude below
  // * which assumes you've destructured it properly above
  var map = L.map("mapid").setView([country.latlng[0], country.latlng[1]], 3);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // * notice I used variable names latitude, longitude, name below
  // * which assumes you've destructured it properly above
  L.marker([country.latlng[0], country.latlng[1]])
    .addTo(map)
    .bindPopup(country.name)
    .openPopup();

  var audio = new Audio("got-it-done-613.mp3");
  audio.play();
}
flagimg.innerHTML = `<img height="250" src="${country.flag}">`;

guessbtn.addEventListener("click", () => drawMap(country));

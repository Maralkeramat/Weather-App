let now = new Date();
let h1 = document.querySelector("h1");
let date = now.getDate();
let days = ["Sun", "Mon", "Thu", "Wed", "Thu", "Fri", "Sat"];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let hour = now.getHours();
let minute = now.getMinutes();
let month = months[now.getMonth()];
let day = days[now.getDay()];
h1.innerHTML = `${day}, ${month} ${date}, ${hour}:${minute}`;
function displayWeatherCondition(response) {
  document.querySelector("h5").innerHTML = response.data.name;
  document.querySelector("h2").innerHTML = Math.round(response.data.main.temp);
}

function search(event) {
  event.preventDefault();
  let apiKey = "2bb8a6fbc896cf8df85ea87dcd960781";
  let city = document.querySelector("#search-text-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

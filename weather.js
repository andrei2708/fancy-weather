const searchButton = document.querySelector(".search-btn");
const inputValue = document.querySelector(".input-value");
const form = document.querySelector("form");




searchButton.addEventListener("click", function(e){
  e.preventDefault();
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=565978bc4df34911533625cad110876b`)
  .then(function (resp) { return resp.json() })
  .then(function (data) {
    console.log(data);
    document.querySelector(".city").textContent = data.name;
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) - 273;
    document.querySelector(".feels-like").innerHTML = `feels like: ${Math.floor(data.main.feels_like) - 273}&deg`;
    document.querySelector(".wind").textContent = `wind: ${Math.floor(data.wind.speed)}m/s`;
    document.querySelector(".humidity").textContent = `humidity: ${data.main.humidity}%`;
    document.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    document.querySelector(".latitude").innerHTML = `latitude: ${(data.coord.lat).toString().slice(0, 2)}&deg${(data.coord.lat).toString().slice(3, 5)}'`;
    document.querySelector(".longitude").innerHTML = `longitude: ${(data.coord.lon).toString().slice(0, 2)}&deg${(data.coord.lon).toString().slice(3, 5)}'`;
  })
  .catch(function () {
  })
})





  /*gettingWeather = async (e) => {
    e.preventDefault();
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=565978bc4df34911533625cad110876b`)
    const data = await api_url.json();
    console.log(data);
    document.querySelector(".city").textContent = data.name;
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) - 273;
    document.querySelector(".feels-like").innerHTML = `feels like: ${Math.floor(data.main.feels_like) - 273}&deg`;
    document.querySelector(".wind").textContent = `wind: ${Math.floor(data.wind.speed)}m/s`;
    document.querySelector(".humidity").textContent = `humidity: ${data.main.humidity}%`;
    document.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    document.querySelector(".latitude").innerHTML = `latitude: ${(data.coord.lat).toString().slice(0, 2)}&deg${(data.coord.lat).toString().slice(3, 5)}'`;
    document.querySelector(".longitude").innerHTML = `longitude: ${(data.coord.lon).toString().slice(0, 2)}&deg${(data.coord.lon).toString().slice(3, 5)}'`;
  }

searchButton.addEventListener("click", gettingWeather);*/
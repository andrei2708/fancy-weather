fetch('http://api.openweathermap.org/data/2.5/weather?id=627811&appid=565978bc4df34911533625cad110876b')
  .then(function (resp) { return resp.json() })
  .then(function (data) {
    console.log(data);
    document.querySelector(".city").textContent = data.name;
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) - 273;
    document.querySelector(".feels-like").innerHTML = `feels like: ${Math.floor(data.main.feels_like) - 273}&deg`;
    document.querySelector(".wind").textContent = `wind: ${Math.floor(data.wind.speed)}`;
    document.querySelector(".humidity").textContent = `humidity: ${data.main.humidity}%`;
    
  })
  .catch(function () {

  })
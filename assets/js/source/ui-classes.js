export default class UI {
	constructor() {
		this.location = document.getElementById('w-location');
		this.latLon = document.getElementById('w-lat-lon');
		this.desc = document.getElementById('w-desc');
		this.string = document.getElementById('w-string');
		this.icon = document.getElementById('w-icon');
		this.humidity = document.getElementById('w-humidity');
		this.dewpoint = document.getElementById('w-dewpoint');
		this.feelsLike = document.getElementById('w-feels-like');
		this.wind = document.getElementById('w-wind');
	}

	// Method to conver string to Title Case i.e. you enter "hello world" you will get "Hello World"
	toTitleCase(str) {
		str = str.toLowerCase().split(' ');
		for (var i = 0; i < str.length; i++) {
			str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
		}
		return str.join(' ');
	}

	// Method to paint the UI
	paint(weather) {
		this.location.textContent = `${weather.name}, ${weather.sys.country}`;
		this.latLon.textContent = `LAT: ${weather.coord.lat}, LON: ${weather.coord.lon}`;
		this.desc.textContent = this.toTitleCase(weather.weather[0].description);
		this.string.innerHTML = `${weather.main.temp}&#8451;`;
		this.icon.setAttribute('src', `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
		this.humidity.innerHTML = `Relative Himidity: ${weather.main.humidity}%`;
		this.dewpoint.innerHTML = `Min Temp of the Day: ${weather.main.temp_min}&#8451;`;
		this.feelsLike.innerHTML = `Max Temp of the Day: ${weather.main.temp_max}&#8451;`;
		this.wind.innerHTML = `Wind Speed &amp; Direction: ${weather.wind.speed} meter/sec at ${weather.wind.speed}&#176;`;
	}
}
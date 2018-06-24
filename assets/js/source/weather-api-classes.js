export default class Weather {
	constructor(city, countryCode) {
		this.apiKey = '49174f9c61a75662403229a54a73a11d';
		this.city = city; 
		this.countryCode = countryCode;
	}
	// Fetch weather from API
	async getWeather() {
		try {
			const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&units=metric&appid=${this.apiKey}`);

			if (response.ok) {
				const weatherData = await response.json();
				if (weatherData.cod === 200) {
					return weatherData;
				} else {
					throw new Error(`${weatherData.message} - ERROR CODE: ${weatherData.cod}`);
				}
			} else {
				throw new Error(`Network Error Happened. ERROR CODE: ${response.status}`);
			}
		} catch(err) {
			throw new Error(err.message);
		}
	}

	// Change weather location
	changeLocation(city, countryCode) {
		this.city = city;
		this.countryCode = countryCode;
	}
}
// Add the require statements of es6-promise polyfill & isomorphic-fetch to make sure after js compilation, the fetch works on old browsers like IE 11, 10.
require('es6-promise').polyfill();
require('isomorphic-fetch');

// Import the classes from their respective files
import LocStorage from './local-storage';
import UI from './ui-classes';
import Weather from './weather-api-classes';

// Init Storage object
const lStorage = new LocStorage;
// Init weather object
const weather = new Weather(lStorage.getLocationData().city, lStorage.getLocationData().countryCode);
// Init UI object
const ui = new UI;

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Chanege Location Event Listener whcih clicked on "Save Changes" in the modal window
document.getElementById('w-change-btn').addEventListener('click', (e) => {
	// Get the city & country code from the modal
	const city = document.getElementById('city').value;
	const countryCode = document.getElementById('countryCode').value;

	// Call the weather changeLocation method
	weather.changeLocation(city, countryCode);

	// Set location in local storage
	lStorage.setLocationData(city, countryCode);

	// Fetch the weather of the new location and paint the UI
	getWeather();

	// Hide the modal window when the user has already clicked Save Changes
	$('#locModal').modal('hide');

})

function getWeather() {
	// Get the weather from the weather API
	weather.getWeather()
		.then((response) => ui.paint(response))
		.catch((err) => console.log(err));
}
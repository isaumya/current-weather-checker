class LocStorage {
	constructor() {
		this.city, this.countryCode;
		this.defaultCity = 'Kolkata';
		this.defaultCountryCode = 'IN';
	}

	getLocationData() {
		// Check City
		if(localStorage.getItem('city') === null || localStorage.getItem('city') === '') {
			this.city = this.defaultCity;
		} else {
			this.city = localStorage.getItem('city');
		}
		// Check Ountry Code
		if(localStorage.getItem('countryCode') === null || localStorage.getItem('countryCode') === '') {
			this.countryCode = this.defaultCountryCode;
		} else {
			this.countryCode = localStorage.getItem('countryCode');
		}
		return {
			city: this.city,
			countryCode: this.countryCode
		}
	}

	setLocationData(city, countryCode) {
		localStorage.setItem('city', city);
		localStorage.setItem('countryCode', countryCode);
	}
}
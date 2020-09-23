const transform = (city) => ({
	name: city.name,
	country: city.sys.country,
	description: city.weather[0].description,
	temp: Math.floor(+city.main.temp - 273, 15),
	wind: city.wind.speed,
	deg: city.wind.deg,
	feelTemp: Math.floor(+city.main.feels_like - 273, 15),
	humidity: city.main.humidity,
	pressure: city.main.pressure,
	visibility: +city.visibility / 1000,
});

export default transform;

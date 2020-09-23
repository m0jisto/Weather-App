import axios from 'axios';
import { useState, useEffect } from 'react';
import transform from './utils';

const useCityWeather = (city) => {
	const [weather, updateWeather] = useState(null);
	const [loading, updateLoading] = useState(false);

	useEffect(() => {
		if (city !== null) {
			updateLoading(true);
			axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=3991c74047383806675283918b51ff42`)
				.then((weatherCity) => {
					updateWeather(transform(weatherCity.data));
					updateLoading(false);
				})
				.catch(() => {
					updateWeather('error');
					updateLoading(false);
				});
		}
	}, [city]);

	return {
		weather,
		loading,
	};
};

export default useCityWeather;

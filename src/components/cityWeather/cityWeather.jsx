import React, { useContext } from 'react';
import useCityWeather from '../../services/WeatherService';
import Spinner from '../spinner';

import { ContextApp } from '../app';

import './cityWeather.sass';
import arrow from './arrow.png';

const CityWeather = () => {
	const { state } = useContext(ContextApp);

	const { weather, loading } = useCityWeather(state.city);

	if (loading) {
		return <Spinner />;
	}

	if (!weather) {
		return <></>;
	}

	if (weather === 'error') {
		return <h2 className="weather__error">Введите корректное название города</h2>;
	}

	let minutes = new Date().getMinutes().toString();

	const hours = new Date().getHours().toString();
	const month = new Date().getMonth().toString();
	const date = new Date().getDate().toString();
	const year = new Date().getFullYear().toString();
	const months = ['Jan', 'Feb', 'Mar, Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	if (+minutes < 10) {
		minutes = `0${minutes}`;
	}

	const {
		name, country, description, temp, wind, deg, feelTemp, humidity, pressure, visibility,
	} = weather;

	const src = `./icon/${description}.png`;
	const styled = {
		width: '15px',
		height: '15px',
		marginLeft: '5px',
		transform: `rotate(${deg}deg)`,
	};

	return (
		<div className="weather">
			<div className="weather__header">
				<div>
					<div className="weather__date">
						{hours}
						:
						{minutes}
						,
						{months[month - 1]}
						{date}
						{year}
					</div>
					<div className="weather__city">
						{name}
						,
						{country}
					</div>
				</div>

				<div className="weather__right">
					<img src={src} alt="" />
					<div className="weather__temp">
						{temp}
						°C
					</div>
				</div>
			</div>

			<div className="weather__wind">
				Wind
				:
				{wind}
				m/s
				<img style={styled} src={arrow} alt="" />
			</div>
			<div className="weather__value">
				Feels like
				{feelTemp}
				°C.
				{`${description[0].toUpperCase()}${description.slice(1)}`}
			</div>
			<div className="weather__value">
				Humidity
				:
				{humidity}
				%
			</div>
			<div className="weather__value">
				Pressure
				:
				{pressure}
				hPa
			</div>
			<div className="weather__value">
				Visibility
				:
				{visibility}
				.0km
			</div>
		</div>
	);
};

export default CityWeather;

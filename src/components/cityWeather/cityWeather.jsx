import React, { useContext } from 'react';
import WeatherService from '../../services/weatherService';
import Spinner from '../spinner'

import { NameCityContext } from '../app/'

import './cityWeather.sass'
import arrow from './arrow.png'

const CityWeather = () => {
    const city = useContext(NameCityContext),
    service = new WeatherService(),

    { weather, loading } = service.useCityWeather(city)

    if (loading) {
        return <Spinner />
    }

    if (!weather) {
        return <div></div>
    }

    if (weather === 'error') {
        return <h2 className="weather__error">Введите корректное название города</h2>
    }


    let minutes = new Date().getMinutes().toString();

    const hours = new Date().getHours().toString(),
    month = new Date().getMonth().toString(),
    date = new Date().getDate().toString(),
    year = new Date().getFullYear().toString(),
    months = ['Jan', 'Feb', 'Mar, Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    if (+minutes < 10) {
        minutes = '0' + minutes
    }

    let { name, country, description, temp, wind, deg, feelTemp, humidity, pressure, visibility } = weather

    const src = `./icon/${description}.png`,
        styled = {
            width: '15px',
            height: '15px',
            marginLeft: '5px',
            transform: `rotate(${deg}deg)`
        }

    description = description[0].toUpperCase() + description.slice(1)

    return (
        <div className="weather">
            <div className="weather__header">
                <div>
                    <div className="weather__date">{hours}:{minutes}, {months[month - 1]} {date} {year}</div>
                    <div className="weather__city">{name}, {country}</div>
                </div>

                <div className="weather__right">
                    <img src={src} alt='' />
                    <div className="weather__temp">{temp}°C</div>
                </div>
            </div>

            <div className="weather__wind">Wind: {wind}m/s <img style={styled} src={arrow} alt='' /></div>
            <div className="weather__value">Feels like {feelTemp}°C. {description}</div>
            <div className="weather__value">Humidity: {humidity}%</div>
            <div className="weather__value">Pressure: {pressure}hPa</div>
            <div className="weather__value">Visibility: {visibility}.0km</div>
        </div>
    )
}

export default CityWeather
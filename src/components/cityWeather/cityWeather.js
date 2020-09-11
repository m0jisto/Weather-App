import React, {Component} from 'react';
import weatherService from'../../service/weatherService';
import Spinner from '../spinner/'

import './cityWeather.sass'
import arrow from './arrow.png'

export default class CityWeather extends Component {
    state = {
        weather: null,
        loading: false
    }

    weatherService = new weatherService()

    componentDidUpdate (prevProps) {
        if (this.props.city !== prevProps.city && this.props.city !== null) {
            this.setState({loading: true})
            
            this.weatherService.getWeather(this.props.city)
                .then(weather => this.setState({
                    weather: this.weatherService._transform(weather.data),
                    loading: false
                }))
                .catch(() => this.setState({
                    weather: undefined,
                    loading: false
                }))
        }
    }

    render () {
        if (this.state.weather === null) {
            return <div></div>
        }

        if (this.state.loading) {
            return <Spinner />
        }

        if (this.state.weather === undefined) {
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

        let {name, country, description, temp, wind, deg, feelTemp, humidity, pressure, visibility} = this.state.weather

        const src = `./icon/${this.state.weather.description}.png`
        const styled = {
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
                        <div className="weather__date">{hours}:{minutes}, {months[month-1]} {date} {year}</div>
                        <div className="weather__city">{name}, {country}</div>
                    </div>

                    <div className="weather__right">
                        <img src={src} alt=''/>
                        <div className="weather__temp">{temp}°C</div>
                    </div>
                </div>

                <div className="weather__wind">Wind: {wind}m/s <img style={styled} src={arrow} alt=''/></div>
                <div className="weather__value">Feels like {feelTemp}°C. {description}</div>
                <div className="weather__value">Humidity: {humidity}%</div>
                <div className="weather__value">Pressure: {pressure}hPa</div>
                <div className="weather__value">Visibility: {visibility}.0km</div>
                
            </div>
        )
    }
}
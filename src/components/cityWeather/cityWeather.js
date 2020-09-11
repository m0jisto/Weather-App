import React, {Component} from 'react';
import weatherService from'../../service/weatherService'

import './cityWeather.sass'
import arrow from './arrow.png'

export default class CityWeather extends Component {
    state = {
        weather: null
    }

    weatherService = new weatherService()

    componentDidUpdate (prevProps) {
        if (this.props.city !== prevProps.city && this.props.city !== null) {
            this.weatherService.getWeather(this.props.city)
                .then(weather => this.setState({
                    weather
                }))
        }
    }

    render () {
        let minutes = new Date().getMinutes().toString();

        const hours = new Date().getHours().toString(),
        month = new Date().getMonth().toString(),
        date = new Date().getDate().toString(),
        year = new Date().getFullYear().toString(),
        months = ['Jan', 'Feb', 'Mar, Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        if (+minutes < 10) {
            minutes = 0 + minutes
        }

        if (this.state.weather === null) {
            return <div></div>
        }

        if (this.state.weather === undefined) {
            return <h2 className="weather__error">Введите корректное название города</h2>
        }

        const src = `./icon/${this.state.weather.description}.png`
        const styled = {
            width: '15px',
            height: '15px',
            marginLeft: '5px',
            transform: `rotate(${this.state.weather.deg}deg)`
        }

        return (
            <div className="weather">
                <div className="weather__header">
                    <div>
                        <div className="weather__date">{hours}:{minutes}, {months[month-1]} {date} {year}</div>
                        <div className="weather__city">{this.state.weather.name}, {this.state.weather.country}</div>
                    </div>

                    <div className="weather__right">
                        <img src={src} alt=''/>
                        <div className="weather__temp">{this.state.weather.temp}°C</div>
                    </div>
                </div>

                <div className="weather__wind">Wind: {this.state.weather.wind}m/s <img style={styled} src={arrow} alt=''/></div>
                <div className="weather__value">Feels like {this.state.weather.likeTemp}°C. Scattered clouds</div>
                <div className="weather__value">Humidity: {this.state.weather.humidity}%</div>
                <div className="weather__value">Pressure: {this.state.weather.pressure}hPa</div>
                <div className="weather__value">Visibility: {this.state.weather.visibility}.0km</div>
                
            </div>
        )
    }
}
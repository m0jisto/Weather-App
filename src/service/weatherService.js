import axios from 'axios'

export default class weatherService {

    async getWeather (city, key = '3991c74047383806675283918b51ff42') {
        return await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}`)
    }

    _transform(city) {
        return {
            name: city.name || '-',
            country: city.sys.country,
            description: city.weather[0].description,
            temp: Math.floor(+city.main.temp-273,15),
            wind: city.wind.speed,
            deg: city.wind.deg,
            feelTemp: Math.floor(+city.main.feels_like-273,15),
            humidity: city.main.humidity,
            pressure: city.main.pressure,
            visibility: +city.visibility / 1000
        }
    }
}


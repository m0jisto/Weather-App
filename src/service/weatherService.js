export default class weatherService {

    async getResource (city, key = '3991c74047383806675283918b51ff42') {
        const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}`);

        return await res.json();
    }
     
    async getWeather (city) {
        let weather = await this.getResource(city)
        console.log(weather)
        console.log(this._transform(weather))
        return this._transform(weather)
    }


    _transform(city) {
        if (city.cod === '404') {
            return undefined
        }
        return {
            name: city.name || '-',
            country: city.sys.country,
            description: city.weather[0].description,
            temp: Math.floor(+city.main.temp-273,15),
            wind: city.wind.speed,
            deg: city.wind.deg,
            likeTemp: Math.floor(+city.main.feels_like-273,15),
            humidity: city.main.humidity,
            pressure: city.main.pressure,
            visibility: +city.visibility / 1000
        }
    }
}

import React, { useState } from 'react';
import SearchCity from '../searchCity/'
import CityWeather from '../cityWeather/'

import './app.sass';

const NameCityContext = React.createContext();

const App = () => {
    const [city, updateCity] = useState(null)

    return (
        <div className="app">
            <div className="wrapper">
                <NameCityContext.Provider value={city}>
                    <SearchCity updateCity={updateCity} />
                    <CityWeather />
                </NameCityContext.Provider>
            </div>
        </div>
    )
}

export { NameCityContext }

export default App;
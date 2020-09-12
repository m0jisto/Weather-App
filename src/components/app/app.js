import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';

import SearchCity from '../searchCity/'
import CityWeather from '../cityWeather/'

import './app.sass';

const App = () => {
    return (
        <div className="app">
            <div className="wrapper">
                <Provider store={store}>
                    <SearchCity/>
                    <CityWeather/>
                </Provider>
            </div>
        </div>
    )
}

export default App;
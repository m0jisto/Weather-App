import React, {Component} from 'react';

import SearchCity from '../searchCity/'
import CityWeather from '../cityWeather/'

import './app.sass';

export default class App extends Component {
    state = {
        city: null
    }

    onAdd = (text) => {
        this.setState({city: text})
    }

    render () {
        return (
            <div className="app">
                <div className="wrapper">
                    <SearchCity onAdd={this.onAdd}/>
                    <CityWeather city={this.state.city}/>
                </div>
            </div>
        )
    }
}
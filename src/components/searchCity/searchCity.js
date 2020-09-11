import React, {Component} from 'react';

import './searchCity.sass'

export default class SearchCity extends Component {
    state = {
            text: ''
        }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.onAdd(this.state.text)
        this.setState({
            text: ''
        })
    }

    render() {
        return ( 
            <form 
                className="form"
                onSubmit={this.onSubmit}>
                <input
                    className="form__input"
                    type="text"
                    placeholder="Введите название города"
                    onChange={(e) => this.setState({text: e.target.value})}
                    value={this.state.text}/>
                <button
                    className="form__btn"
                    type="submit">Найти</button>
            </form>
        )
    }
}
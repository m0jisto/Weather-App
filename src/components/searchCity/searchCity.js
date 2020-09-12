import React, {Component} from 'react';
import { connect } from 'react-redux';
import { changeNameCity } from '../../actions/'

import './searchCity.sass'

class SearchCity extends Component {
    state = {
        text: ''
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.changeNameCity('city', this.state.text)
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
                    value={this.state.text}
                    onChange={(e) => this.setState({text: e.target.value})}/>
                <button
                    className="form__btn"
                    type="submit">Найти</button>
            </form>
        )
    }
}

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => {
    return {
        changeNameCity: (key, value) => {
            dispatch(changeNameCity(key, value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchCity);
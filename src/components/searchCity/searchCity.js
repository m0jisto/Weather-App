import React, { useState } from 'react';
import { connect } from 'react-redux';
import { changeNameCity } from '../../actions/'

import './searchCity.sass'

const SearchCity = ({changeNameCity}) => {
    const [text, onChangeText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault()
        changeNameCity('city', text)
        onChangeText('')
    }

    return ( 
        <form 
            className="form"
            onSubmit={onSubmit}
            >
            <input
                className="form__input"
                type="text"
                placeholder="Введите название города"
                value={text}
                onChange={(e) => onChangeText(e.target.value)}/>
            <button
                className="form__btn"
                type="submit">Найти</button>
        </form>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeNameCity: (key, value) => {
            dispatch(changeNameCity(key, value))
        }
    }
}

export default connect(state => state, mapDispatchToProps)(SearchCity);
import React, { useState, useContext } from 'react';
import { ContextApp } from '../app/'

import './searchCity.sass'

const SearchCity = () => {
    const [text, onChangeText] = useState('');
    const { dispatch } = useContext(ContextApp);

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch({
            type: 'CHANGE_NAME_CITY',
            payload: {
                city: text
            }
        })
        onChangeText('')
    }

    return (
        <form
            className="form"
            onSubmit={onSubmit}>
            <input
                className="form__input"
                type="text"
                placeholder="Введите название города"
                value={text}
                onChange={(e) => onChangeText(e.target.value)} />
            <button
                className="form__btn"
                type="submit">Найти</button>
        </form>
    )
}

export default SearchCity
import React, { useState } from 'react';

import './searchCity.sass'

const SearchCity = ({updateCity}) => {
    const [text, onChangeText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault()
        updateCity(text)
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
                onChange={(e) => onChangeText(e.target.value)}/>
            <button
                className="form__btn"
                type="submit">Найти</button>
        </form>
    )
}

export default SearchCity
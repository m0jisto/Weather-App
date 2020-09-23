import React, { useReducer } from 'react';
import SearchCity from '../searchCity';
import CityWeather from '../cityWeather';

import './app.sass';

const ContextApp = React.createContext()

const initialState = {
	city: null,
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'CHANGE_NAME_CITY':
			return {
				...action.payload,
			};
		default:
			return state;
	}
};

const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<div className="app">
			<div className="wrapper">
				<ContextApp.Provider value={{ dispatch, state }}>
					<SearchCity />
					<CityWeather />
				</ContextApp.Provider>
			</div>
		</div>
	);
};

export { ContextApp, App };

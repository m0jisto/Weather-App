const initialState = {
    city: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_NAME_CITY': {
            return {
                [action.payload.key]: action.payload.value
            }
        }

        default: 
            return state
    }
}

export default reducer
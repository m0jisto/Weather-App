const changeNameCity = (key, value) => {
    return {
        type: 'CHANGE_NAME_CITY',
        payload: {
            key,
            value
        }
    }
}
export { changeNameCity };
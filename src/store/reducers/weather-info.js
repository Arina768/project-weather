const defaultState = {
    weatherToday: [],
    otherDayWeather: [],
    city:'Minsk'
}

export const infoReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'save_info': {

            return {
                ...state,
                weatherToday: action.payload.weatherToday,
                otherDayWeather: action.payload.otherDayWeather,
            };
        }
        case 'change_city':{
            return {
            ...state,
                city: action.payload
            }
        }
    }
    return state
}
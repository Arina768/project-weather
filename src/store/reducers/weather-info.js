import { SAVE_INFO, CHANGE_CITY } from "../../MainPage/constants";

const defaultState = {
  weatherToday: [],
  otherDayWeather: [],
  city: localStorage.getItem('city') || 'Minsk',
}

export const infoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SAVE_INFO: {
      return {
        ...state,
        weatherToday: action.payload.weatherToday,
        otherDayWeather: action.payload.otherDayWeather,
      };
    }
    case CHANGE_CITY: {
      return {
        ...state,
        city: action.payload
      };
    }
  }
  return state;
}
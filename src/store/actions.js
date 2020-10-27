import { SAVE_INFO, CHANGE_CITY } from "../MainPage/constants";
import { getWeatherToday, getOtherDayWeather } from "../service";

export const saveInfoAction = (weatherToday, otherDayWeather) => ({
  type: SAVE_INFO,
  payload: {
    weatherToday: weatherToday,
    otherDayWeather: otherDayWeather,
  },
})

export const changeCityAction = (city) => ({
  type: CHANGE_CITY,
  payload: city,
})

export const parseWeatherData = (list) => (dispatch) => {
  const weatherToday = getWeatherToday(list);
  const otherDayWeather = getOtherDayWeather(list);
  dispatch(saveInfoAction(weatherToday, otherDayWeather));
}

import { SAVE_INFO, CHANGE_CITY } from "./constance";

export const saveInfoAction = (weatherToday, otherDayWeather) => ({
  type: SAVE_INFO,
  payload: {
    weatherToday: weatherToday,
    otherDayWeather: otherDayWeather,
  }
})

export const changeCityAction = (city) => ({
  type: CHANGE_CITY,
  payload: city
})
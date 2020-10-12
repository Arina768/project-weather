import { SAVE_INFO, CHANGE_CITY } from "./types";

export const saveInfoAction = (weatherToday, otherDayWeather) => ({
    type: "save_info",
    payload: {
        weatherToday,
        otherDayWeather,
    },
});

export const changeCityAction = city => ({
    type: "change_city",
    payload: city,
});

export const saveInfoAction = (weatherToday, otherDayWeather) => ({
    type: 'save_info',
    payload: {
        weatherToday: weatherToday,
        otherDayWeather: otherDayWeather,
    }
})

export const changeCityAction = (city) => ({
    type: 'change_city',
    payload: city
})
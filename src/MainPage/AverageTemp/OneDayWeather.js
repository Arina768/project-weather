import React from "react";
import { getDayIcon, getDayTemp, getDate, getWeekday } from "./service";

export const OneDayWeather = ({ oneDayWeatherInfo, otherDaysWeather, index }) => {
  return (
    <div>
      <p>{getWeekday(oneDayWeatherInfo)}</p>
      <p style={{ color: '#3e3e3e' }}>
        {getDate(oneDayWeatherInfo).date}/{getDate(oneDayWeatherInfo).month}
      </p>
      <img src={`http://openweathermap.org/img/wn/${getDayIcon(otherDaysWeather, index + 1)}@2x.png`}/>
      <p>Day: {getDayTemp(otherDaysWeather, index + 1)}°</p>
      <p style={{ color: '#3e3e3e' }}>Night: {oneDayWeatherInfo.temp}°</p>
    </div>
  )
}

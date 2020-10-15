import React from "react";
import { getDayIcon, getDayTemp } from "./service";

export const OneDayWeather = ({ oneDayWeatherInfo, otherDaysWeather, index }) => {
  return (
    <div>
      <p>
        {(new Date(oneDayWeatherInfo.date).getDate())}/{(new Date(oneDayWeatherInfo.date).getMonth())}
      </p>
      <img src={`http://openweathermap.org/img/wn/${getDayIcon(otherDaysWeather, index + 1)}@2x.png`}/>
      <p>Day: {getDayTemp(otherDaysWeather, index + 1)}°</p>
      <p style={{ color: '#484848' }}>Night: {oneDayWeatherInfo.temp}°</p>
    </div>
  )
}

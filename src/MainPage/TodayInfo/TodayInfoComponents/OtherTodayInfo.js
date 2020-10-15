import React from "react";

import './style.css'

export const OtherTodayInfo = ({ wind, humidity, pressure }) => {
  return (
    <div className='other-today-info'>
      <h3>Other information</h3>
      <p>Wind: {wind} km/h</p>
      <p>Humidity: {humidity}%</p>
      <p>Pressure:{pressure} hPa</p>
    </div>
  )
}
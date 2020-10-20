import React from "react";

import './style.css'

export const TodayTemperature = ({ dayTemp, nightTemp, dayDescription }) => {
  return (
    <div className='temp-today'>
      <h3>{dayDescription}</h3>
      <p>Day: {dayTemp}°C</p>
      <p>Night: {nightTemp}°C</p>
    </div>
  )
}
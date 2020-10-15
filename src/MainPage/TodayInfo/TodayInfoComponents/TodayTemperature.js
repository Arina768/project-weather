import React from "react";

import './style.css'

export const TodayTemperature = ({ dayTemp, nightTemp }) => {
  return (
    <div className='temp-today'>
      <h3>Temperature</h3>
      <p>Day: {dayTemp}°</p>
      <p>Night: {nightTemp}°</p>
    </div>
  )
}
import React from "react";

import './style.css'

export const TodayIcon = ({ dayIcon }) => {
  return (
    <img src={`http://openweathermap.org/img/wn/${dayIcon}@2x.png`} className='today-icon'/>
  )
}
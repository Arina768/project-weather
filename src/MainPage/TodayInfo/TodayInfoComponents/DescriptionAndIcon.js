import React from "react";

import './style.css'

export const DescriptionAndIcon = ({ dayDescription, dayIcon }) => {
  return (
    <div className='description-and-icon'>
      <p>{dayDescription}</p>
      <img src={`http://openweathermap.org/img/wn/${dayIcon}@2x.png`} className='today-icon'/>
    </div>
  )
}
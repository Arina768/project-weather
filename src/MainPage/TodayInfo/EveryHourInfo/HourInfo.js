import React from "react";

export const HourInfo = ({ date, icon, temp, hour }) => {
  return (
    <div>
      <span>{(new Date(date)).getHours() + hour}:00</span>
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}/>
      <span>{temp}°</span>
    </div>
  )
}
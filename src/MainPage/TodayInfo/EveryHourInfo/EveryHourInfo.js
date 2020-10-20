import React from "react";
import { HourInfo } from './HourInfo';

import './style.css'

export const EveryHourInfo = ({ weatherInfo }) => {
  return (
    <div className='temp-by-hour'>
      {weatherInfo.map(({ date, temp, icon }) => {
        return <>
          <HourInfo date={date} temp={temp} icon={icon} hour={0} />
          <HourInfo date={date} temp={temp} icon={icon} hour={1} />
          <HourInfo date={date} temp={temp} icon={icon} hour={2} />
        </>
      })}
    </div>
  );
};
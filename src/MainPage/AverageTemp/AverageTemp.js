import React from "react";
import { useSelector } from 'react-redux';

import { OneDayWeather } from './OneDayWeather';

import './style.css'


const AverageTemp = () => {
  const otherDaysWeather = useSelector(state => state.info.otherDayWeather)

  return (
    <section className='other-days-info'>
      {otherDaysWeather.map((oneDayWeatherInfo, index) => {
        if (index % 2 === 0) {
          return <OneDayWeather index={index} otherDaysWeather={otherDaysWeather}
                                oneDayWeatherInfo={oneDayWeatherInfo} />
        }
      })}
    </section>
  )
}

export default AverageTemp;

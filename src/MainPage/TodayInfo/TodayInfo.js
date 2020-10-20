import React from "react";
import { useSelector } from 'react-redux';

import { EveryHourInfo } from './EveryHourInfo/EveryHourInfo';
import { TodayIcon } from './TodayInfoComponents/TodayIcon';
import { TodayTemperature } from './TodayInfoComponents/TodayTemperature';
import { OtherTodayInfo } from './TodayInfoComponents/OtherTodayInfo';

import { getTodayInfo } from './service';

import './style.css'

const TodayInfo = () => {
  const weatherToday = useSelector(state => state.info.weatherToday)
  const todayInfo = getTodayInfo(weatherToday);

  return (
    <section className='today-section'>
      <div className='main-today-info'>
        <TodayIcon dayIcon={todayInfo.dayIcon} />
        <TodayTemperature dayDescription={todayInfo.dayDescription}
                          dayTemp={todayInfo.dayTemp} nightTemp={todayInfo.nightTemp} />
        <OtherTodayInfo wind={weatherToday[0].wind} pressure={weatherToday[0].pressure}
                        humidity={weatherToday[0].humidity} />
      </div>
      <EveryHourInfo weatherInfo={weatherToday} />
    </section>
  )
}

export default TodayInfo;

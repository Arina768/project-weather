import React from "react";
import { useSelector } from 'react-redux';

import { EveryHourInfo } from './EveryHourInfo/EveryHourInfo';
import { DescriptionAndIcon } from './TodayInfoComponents/DescriptionAndIcon';
import { TodayTemperature } from './TodayInfoComponents/TodayTemperature';
import { OtherTodayInfo } from './TodayInfoComponents/OtherTodayInfo'

import { useTodayInfo } from './useTodayInfo';


import './style.css'

const TodayInfo = () => {
  const weatherToday = useSelector(state => state.info.weatherToday)
  const todayInfo = useTodayInfo(weatherToday);

  return (
    <section className='today-section'>
      <div className='main-today-info'>
        <DescriptionAndIcon dayDescription={todayInfo.dayDescription} dayIcon={todayInfo.dayIcon}/>
        <TodayTemperature dayTemp={todayInfo.dayTemp} nightTemp={todayInfo.nightTemp}/>
        <OtherTodayInfo wind={weatherToday[0].wind} pressure={weatherToday[0].pressure}
                        humidity={weatherToday[0].humidity}/>
      </div>
      <EveryHourInfo weatherInfo={weatherToday}/>
    </section>
  )
}

export default TodayInfo;

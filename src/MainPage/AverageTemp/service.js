import React from "react";
import { DAYS } from '../constants';

export function getDayTemp(weatherInfo, index) {
  return weatherInfo[index].temp;
}

export function getDayIcon(weatherInfo, index) {
  if (weatherInfo[index]) {
    return weatherInfo[index].icon;
  } else {
    return weatherInfo[index - 1].icon;
  }
}

export function getDate(oneDayWeatherInfo) {
  const date = (new Date(oneDayWeatherInfo.date).getDate());
  const month = (new Date(oneDayWeatherInfo.date).getMonth());
  return {
    date,
    month,
  }
}

export function getWeekday(oneDayWeatherInfo) {
  return DAYS[new Date(oneDayWeatherInfo.date).getDay()];
}

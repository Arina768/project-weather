import React from "react";

export function getDayTemp(weatherInfo, index) {
  return weatherInfo[index].temp;
}

export function getDayIcon(weatherInfo, index) {
  return weatherInfo[index].icon;
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
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return days[new Date(oneDayWeatherInfo.date).getDay()];
}
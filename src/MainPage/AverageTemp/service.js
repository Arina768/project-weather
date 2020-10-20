import React from "react";

export function getDayTemp(weatherInfo, index) {
  if (weatherInfo[index]) {
    return weatherInfo[index].temp;
  } else {
    return weatherInfo[index - 1].temp;
  }
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
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return days[new Date(oneDayWeatherInfo.date).getDay()];
}
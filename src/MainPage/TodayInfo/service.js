export function getHourWeather(date, hour) {
  const time = (new Date(date)).getHours();
  return time === hour;
}

export function getDayWeather(weatherToday, hour) {
  return weatherToday.filter(({ date }) => getHourWeather(date, hour))[0];
}


export function getTodayInfo(weatherToday) {
  const dayWeather = getDayWeather(weatherToday, 12);
  const dayDescription = dayWeather.description[0].toUpperCase() + dayWeather.description.slice(1);
  const nightTemp = getDayWeather(weatherToday, 0).temp;
  const dayTemp = dayWeather.temp;
  const dayIcon = dayWeather.icon;

  return { dayTemp, dayIcon, nightTemp, dayDescription };
}
export function getHourWeather(date, hour) {
  const time = (new Date(date)).getHours();
  return time === hour;
}

export function getDayWeather(weatherToday, hour) {
  return weatherToday.filter(({ date }) => getHourWeather(date, hour))[0]
}
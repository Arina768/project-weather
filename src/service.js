export function getWeather(dt_txt, today) {
  const date = new Date(dt_txt);

  return date.getDay() !== today && date.getHours() === 0 || date.getHours() === 12;
}

export function parseData(weather) {
  return {
    date: weather.dt_txt,
    temp: Math.round(weather.main.temp),
    icon: weather.weather[0].icon,
    description: weather.weather[0].description,
    wind: Math.round(weather.wind.speed * 3.6),
    humidity: weather.main.humidity,
    pressure: weather.main.pressure,
  };
}

export function getWeatherToday(list) {
  return list.filter((item, index) => index < 8).map(parseData);
}

export function getOtherDayWeather(list) {
  const today = new Date().getDay();
  return list.filter((item) => getWeather(item.dt_txt, today)).map(parseData);
}
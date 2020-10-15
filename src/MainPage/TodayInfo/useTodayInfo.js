import { useEffect, useState } from "react";
import { getDayWeather } from "./service";

export const useTodayInfo = (weatherToday) => {

  const [dayTemp, setDayTemp] = useState(0);
  const [nightTemp, setNightTemp] = useState(0);
  const [dayIcon, setDayIcon] = useState('');
  const [dayDescription, setDayDescription] = useState('');

  useEffect(() => {
      getTodayTemp()
    }
  )

  function getTodayTemp() {
    const dayWeather = getDayWeather(weatherToday, 12)
    const dayDescription = dayWeather.description[0].toUpperCase() + dayWeather.description.slice(1)
    const nightWeather = getDayWeather(weatherToday, 0)

    setDayTemp(dayWeather.temp)
    setNightTemp(nightWeather.temp)
    setDayIcon(dayWeather.icon)
    setDayDescription(dayDescription)
  }
  return {dayTemp, dayIcon, nightTemp, dayDescription}
}
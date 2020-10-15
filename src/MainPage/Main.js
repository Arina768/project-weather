import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { saveInfoAction } from "../store/actions";

import Header from "./Header/Header";
import TodayInfo from "./TodayInfo/TodayInfo";
import AverageTemp from './AverageTemp/AverageTemp';
import { Error } from './components/Error';
import { Loading } from "./components/Loading";

import { getWeather, parseDate } from './service';

import '../global.css'


const Main = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const city = useSelector(state => state.info.city);

  const dispatch = useDispatch();


  useEffect(() => {
    async function fetchList() {
      try {
        const response = await fetch(
          `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=d903cb4a25e5d26271fbc6adcc4ce845`
        );
        if (!response.ok) {
          throw new Error('error');
        }
        const { list } = await response.json();
        // middleware
        const today = new Date().getDay();
        const weatherToday = list.filter((item, index) => index < 8).map(parseDate);
        const otherDayWeather = list.filter((item) => getWeather(item.dt_txt, today)).map(parseDate);
        dispatch(saveInfoAction(weatherToday, otherDayWeather));
        // middleware
        setLoading(false);

      } catch (e) {
        setError(true)
        setLoading(false)
      }
    }

    fetchList();
  }, [city]);


  if (error) {
    return <Error/>;
  }

  if (loading) {
    return <Loading/>;
  }

  return (
    <div>
      <Header/>
      <TodayInfo/>
      <AverageTemp/>
    </div>
  )
}

export default Main;
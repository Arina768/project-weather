import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { parseWeatherData } from "../store/actions";

export const useMain = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const city = useSelector(state => state.info.city);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchList() {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=d903cb4a25e5d26271fbc6adcc4ce845`
        );
        if (!response.ok) {
          throw new Error('error');
        }
        const { list } = await response.json();
        dispatch(parseWeatherData(list));
        setLoading(false);

      } catch (e) {
        setError(true);
        setLoading(false);
      }
    }
    fetchList();
  }, [city]);
  return { error, loading };
}
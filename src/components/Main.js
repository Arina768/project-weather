import React, { useEffect, useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";

import NowInfo from "./NowInfo";
import { saveInfoAction } from "../actions";
import AverageTemp from "./AverageTemp";
import { Error } from "./Error";
import { Loading } from "./Loading";

import "../style.css";

const Main = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const city = useSelector(state => state.info.city);

    const dispatch = useDispatch();

    useEffect(() => {
        fetchList();
    });

    async function fetchList() {
        try {
            const response = await fetch(
                `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=d903cb4a25e5d26271fbc6adcc4ce845`
            );
            if (!response.ok) {
                throw new Error("error");
            }
            const { list } = await response.json();
            const today = new Date().getDay();
            const weatherToday = list.filter((item, index) => index < 8).map(parseDate);
            const otherDayWeather = list.filter(item => getWeather(item.dt_txt, today)).map(parseDate);
            dispatch(saveInfoAction(weatherToday, otherDayWeather));
            setLoading(false);
        } catch (e) {
            setError(true);
            setLoading(false);
        }
    }

    function getWeather(dt_txt, today) {
        const date = new Date(dt_txt);

        return (date.getDay() !== today && date.getHours() === 0) || date.getHours() === 12;
    }

    function parseDate(weather) {
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

    return loading ? (
        <Loading />
    ) : error ? (
        <Error />
    ) : (
        <div>
            <NowInfo />
            <AverageTemp />
        </div>
    );
};

export default Main;
// const mapStateToProps = state => ({
//     city: state.info.city,
// });

// const mapDispatchToProps = dispatch => ({
//     saveInfo: (weatherToday, otherDayWeather) => dispatch(saveInfoAction(weatherToday, otherDayWeather)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Main);

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { EveryHourInfo } from "./EveryHourInfo";
import Header from "./Header";

const NowInfo = ({ info }) => {
    // const { info } = props;
    const [dayTemp, setDayTemp] = useState(0);
    const [nightTemp, setNightTemp] = useState(0);
    const [dayIcon, setDayIcon] = useState("");
    const [dayDescription, setDayDescription] = useState("");

    useEffect(
        () => {
            getTodayTemp();
        }
        // ?? hde
    );

    function getTodayTemp() {
        //TODO: Move to service.js
        // const dayWeather = getDayWeather()

        const dayWeather = info.filter(({ date }) => getHourWeather(date, 12))[0];
        const dayTemp = dayWeather.temp;
        const dayIcon = dayWeather.icon;
        const dayDescription = dayWeather.description[0].toUpperCase() + dayWeather.description.slice(1);
        const nightTemp = info.filter(({ date }) => getHourWeather(date, 0))[0].temp;

        setDayTemp(dayTemp);
        setNightTemp(nightTemp);
        setDayIcon(dayIcon);
        setDayDescription(dayDescription);
    }

    function getHourWeather(date, hour) {
        const time = new Date(date).getHours();
        return time === hour;
    }

    return (
        <div className="today-section">
            <Header />
            <div className="main-today-info">
                <div className="description-and-icon">
                    <p className="weather-description">{dayDescription}</p>
                    <img src={`http://openweathermap.org/img/wn/${dayIcon}@2x.png`} className="today-icon" />
                </div>
                <div className="general-today-info">
                    <h3>Temperature</h3>
                    <p>Day: {dayTemp}°</p>
                    <p>Night: {nightTemp}°</p>
                </div>
                <div className="other-today-info">
                    <h3>Other information</h3>
                    <p className="other">Wind: {info[0].wind}km/h</p>
                    <p>Humidity: {info[0].humidity}%</p>
                    <p>Pressure:{info[0].pressure}hPa</p>
                </div>
            </div>
            <EveryHourInfo info={info} />
        </div>
    );
};

const mapStateToProps = state => ({
    info: state.info.weatherToday,
});

export default connect(mapStateToProps)(NowInfo);

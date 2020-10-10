import React from "react";
import {connect} from 'react-redux';


const AverageTemp = ({weatherInfo}) => {
    function getDayTemp(index) {
        return weatherInfo[index].temp
    }

    function getDayIcon(index) {
        return weatherInfo[index].icon
    }

    return (
        <section className='every-day'>
            {weatherInfo.map((weatherInfo, index) => {
                if (index % 2 === 0) {
                    return (
                        <div>
                            <p>{(new Date(weatherInfo.date).getDate())}/{(new Date(weatherInfo.date).getMonth())}</p>
                            <img src={`http://openweathermap.org/img/wn/${getDayIcon(index + 1)}@2x.png`}/>
                            <p>Day: {getDayTemp(index + 1)}°</p>
                            <p style={{color: '#484848'}}>Night: {weatherInfo.temp}°</p>
                        </div>
                    )
                }
            })}
        </section>
    )
}
const mapStateToProps = (state) => ({
    weatherInfo: state.info.otherDayWeather,
});
export default connect(
    mapStateToProps,
)(AverageTemp);

import React, {useState} from "react";
import {connect} from "react-redux";
import {changeCityAction} from "../actions";

const InputCity = ({changeCity}) => {
    const [city, setCity] = useState('');

    function handleInputChange({target}) {
        setCity(target.value)
    }

    function handleButtonClick() {
        changeCity(city)
        setCity('')

    }

    return (
        <>
            <input onChange={handleInputChange} type="text" placeholder=" Enter your city" value={city}/>
            <button onClick={handleButtonClick}>Search</button>
        </>
    )
}

const mapDispatchToProps = (dispatch) => ({
    changeCity: (city) => dispatch(changeCityAction(city)),
})

export default connect(
    null,
    mapDispatchToProps
)(InputCity);
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeCityAction } from "../../store/actions";
import 'antd/dist/antd.css';


import { Input } from 'antd';

const { Search } = Input;

const InputCity = () => {
  const dispatch = useDispatch();

  const [city, setCity] = useState('');

  function handleInputChange({ target }) {
    setCity(target.value)
  }

  function handleButtonClick() {
    if (city !== '') {
      dispatch(changeCityAction(city))
      setCity('')
    }
  }

  return (
    <Search placeholder="Enter your city" onChange={handleInputChange} onSearch={handleButtonClick}
            type="text" value={city} enterButton/>
  )
}

export default InputCity;
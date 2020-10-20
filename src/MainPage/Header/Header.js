import React from "react";
import { useSelector } from "react-redux";

import { CityInput } from './CityInput/CityInput';

import './style.css';


const Header = () => {
  const city = useSelector(state => state.info.city);

  return (
    <>
      <div className='header'>
        <h1>{city[0].toUpperCase() + city.slice(1)}</h1>
        <h1>Date: {(new Date().getDate())}/{(new Date().getMonth())}/{(new Date().getFullYear())}</h1>
      </div>
      <div className='change-city-input'>
        <CityInput />
      </div>
    </>
  )
}

export default Header;
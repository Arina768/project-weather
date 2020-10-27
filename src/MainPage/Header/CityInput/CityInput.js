import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { changeCityAction } from "../../../store/actions";

import { findCity } from '../service';
import { useCityInput } from './useCityInput';
import { CityError } from './CityError';

import 'antd/dist/antd.css';
import { AutoComplete, Input } from 'antd';

const { Search } = Input;

export const CityInput = () => {
  const dispatch = useDispatch();
  const [options, setOptions] = useState([]);
  const [error, setError] = useState('');

  const cities = useCityInput();

  const handleSearch = (searchText) => {
    setOptions(
      !searchText ? [] : [findCity(searchText, cities)],
    );
  };

  const handleSelect = () => {
    const value = options[0].value;
    if (!value || value === 'Vilniaus Apskritis') {
      setError('Sorry, this city does not exist in our database')
    } else {
      localStorage.setItem('city', value)
      dispatch(changeCityAction(value))
      setError('')
    }
    setOptions([])
  };


  return (
    <>
      <AutoComplete
        options={options}
        style={{
          width: '100%',
        }}
        onSelect={handleSelect}
        onSearch={handleSearch}
      >
        <Search placeholder="Enter your city" onSearch={handleSelect}
                type="text" enterButton />
      </AutoComplete>
      <CityError error={error} />
    </>
  );
};

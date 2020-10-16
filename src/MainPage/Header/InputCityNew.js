import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";

import 'antd/dist/antd.css';
import { AutoComplete } from 'antd';
import { changeCityAction } from "../../store/actions";


export const InputCity = () => {
  const dispatch = useDispatch();

  const [cities, setCities] = useState([]);
  const [options, setOptions] = useState([]);

  useEffect(() => {
      async function fetchList() {
        const info = await fetch('https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.json')
        const response = await info.json()
        const cities = await Object.values(response).map((city) => {
          return city;
        }).flat()
        setCities(cities)
      }
      fetchList()
    }
  )

  const mockVal = (str) => {
    const result = cities.find(el => el.match(str[0].toUpperCase() + str.slice(1)))
    return {
      value: result,
    };
  };
  const onSearch = (searchText) => {
    setOptions(
      !searchText ? [] : [mockVal(searchText)],
    );
  };

  const onSelect = (data) => {
    dispatch(changeCityAction(data))
  };

  return (
    <>
      <AutoComplete
        options={options}
        style={{
          width: '100%',
        }}
        onSelect={onSelect}
        onSearch={onSearch}
        placeholder="input here"
        enterButton
      />
    </>
  );
};

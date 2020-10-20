import React, { useEffect, useState } from "react";

export const useCityInput = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
      async function fetchCityList() {
        const response = await fetch('https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.json')
        const countryInfo = await response.json()
        const cities = await Object.values(countryInfo).map((city) => city).flat();
        setCities(cities)
      }

      fetchCityList()
    }, [0]
  )
  return cities;
}
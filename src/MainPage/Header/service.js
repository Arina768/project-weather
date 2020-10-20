export const findCity = (inputValue, cities) => {
  const result = cities.find(element => element.match(inputValue[0].toUpperCase() + inputValue.slice(1)));
  return {
    value: result,
  };
};
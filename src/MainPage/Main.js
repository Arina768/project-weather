import React from "react";

import Header from "./Header/Header";
import TodayInfo from "./TodayInfo/TodayInfo";
import AverageTemp from './AverageTemp/AverageTemp';
import { Error } from './components/Error';
import { Loading } from "./components/Loading";

import '../global.css'
import { useMain } from "./useMain";


const Main = () => {
  const status = useMain();

  if (status.error) {
    return <Error />;
  }

  if (status.loading) {
    return <Loading />;
  }

  return (
    <div>
      <Header />
      <TodayInfo />
      <AverageTemp />
    </div>
  )
}

export default Main;
import React from "react";

import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import './style.css'

export const Loading = () => {
  const antIcon = <LoadingOutlined style={{ fontSize: 32 }} spin/>;
  return (
    <div className='loading'>
      <h1>Loading</h1>
      <Spin size="large" indicator={antIcon} style={{ color: 'rgba(255, 255, 255, 0.71)' }}/>
    </div>
  )
}

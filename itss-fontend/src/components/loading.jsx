// src/components/LoadingScreen.jsx
import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import './css/loading.css'; 

const antIcon = <LoadingOutlined style={{ fontSize: 48 }} spin />;

const LoadingScreen = () => {
  return (
    <div className="loading-container">
      <Spin indicator={antIcon} tip="Đang tải dữ liệu..." size="large" />
    </div>
  );
};

export default LoadingScreen;


import React from 'react';
import { Result, Button } from 'antd';
import './css/error_screen.css'; 

const ErrorScreen = ({ message = "Đã xảy ra lỗi!", onRetry }) => {
  return (
    <div className="error-screen">
      <Result
        status="error"
        title="Có lỗi xảy ra"
        subTitle={message}
        extra={[
          <Button type="primary" onClick={onRetry} key="retry">
            Thử lại
          </Button>
        ]}
      />
    </div>
  );
};

export default ErrorScreen;

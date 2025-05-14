import React from 'react';
import { Button } from 'antd';
import './css/buttontext.css'; 

const ButtonText = ({ title, onClick }) => {
  return (
    <Button
      className="custom-button"
      onClick={onClick}
    >
      #{title}
    </Button>
  );
};

export default ButtonText;
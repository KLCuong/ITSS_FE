import React from 'react';
import { Layout, Menu, Button } from 'antd';
import { Link } from 'react-router-dom'; // Nếu dùng react-router-dom
import 'antd/dist/reset.css'; // Import CSS của Ant Design

const { Header } = Layout;

const AppHeader = () => {
  const menuItems = [
    {
      key: 'aboutus',
      label: <Link to="/aboutus">About Us</Link>,
    },
    {
      key: 'contactus',
      label: <Link to="/contactus">Contact Us</Link>,
    },
    {
      key: 'signin',
      label: <Link to="/signin">Sign In</Link>,
    },
    {
      key: 'signup',
      label: <Link to="/signup">Sign Up</Link>,
    },
  ];
  return (
    <Header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#fff',
        padding: '0 20px',
        height: 64, 
        lineHeight: '64px', 
      }}>
      {/* Bên trái: Tên trang web */}
      <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#1890ff' }}>
        <Link to="/">My Website</Link>
      </div>

      {/* Bên phải: Các nút chức năng */}
      <Menu mode="horizontal" items={menuItems} style={{ background: 'transparent', border: 'none' }} />
    </Header>
  );
};

export default AppHeader;
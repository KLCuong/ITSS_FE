import React from 'react';
import { Menu, Button } from 'antd';
import SearchBar from '../../components/searchbar';
import './homepage.css';
import ButtonText from '../../components/buttontext';

const Homepage = () => {
  const buttonItems = [
    "TÀI LIỆU BÁCH KHOA",
    "KHÓA HỌC",
    "PHẦN MỀM",
    "TÀI LIỆU NEU",
    "IELTS",
    "TOEIC"
  ];
  return (
    <div className="homepage-container">
      <div className='homepage-background'>
        <div className="homepage-text-container">
          <h1 className="homepage-centered-text">
            Chào mừng bạn đến với trang web!
          </h1>
        </div>
        {/* Thanh Tìm kiếm */}
          <SearchBar />
        {/* Các nút category */}
        <div className="homepage-category-container">
          <h2 className="category-centered-text">
            Bạn muốn tìm kiếm gì?
          </h2>
          <div className="button-section">
            {buttonItems.map((item, index) => (
              <ButtonText 
                key={index}
                title={item}
                onClick={() => console.log(`${item} clicked`)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
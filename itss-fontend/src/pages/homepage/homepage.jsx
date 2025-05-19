import React from 'react';
import { Menu, Button } from 'antd';
import SearchBar from '../../components/searchbar';
import './homepage.css';
import ButtonText from '../../components/buttontext';
import { Typography } from 'antd';
import File_Container from '../../components/file_container';


const { Title, Text } = Typography;
const Homepage = () => {
  const buttonItems = [
    "TÀI LIỆU BÁCH KHOA",
    "KHÓA HỌC",
    "PHẦN MỀM",
    "TÀI LIỆU NEU",
    "IELTS",
    "TOEIC"
  ];
  const documentList = [
  {
    nganh: "Viện Kinh Tế Và Quản Lý",
    title: "Tài liệu môn Đạo đức kinh doanh",
    date: "13/11/2024",
  },
  {
    nganh: "Khoa Công Nghệ Thông Tin",
    title: "Bài giảng môn Cấu trúc dữ liệu",
    date: "10/10/2024",
  },
  {
    nganh: "Khoa Điện Tử Viễn Thông",
    title: "Tài liệu môn Mạch Điện",
    date: "01/12/2024",
  },
  {
    nganh: "Viện Ngoại Ngữ",
    title: "Giáo trình Tiếng Anh Thương Mại",
    date: "20/09/2024",
  },
  {
    nganh: "Khoa Xây Dựng",
    title: "Bài giảng môn Vật liệu xây dựng",
    date: "05/11/2024",
  },
  {
    nganh: "Viện Khoa Học Tự Nhiên",
    title: "Tài liệu môn Hóa học đại cương",
    date: "15/10/2024",
  },
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
            Có thể bạn quan tâm
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
        <div className="white-section">
          <h2 className="section-title-text">
            Tìm kiếm phổ biến
          </h2>
          <div className="custom-underline"></div>

          <div className="document-list">
            {documentList.map((doc, idx) => (
              <File_Container
                key={idx}
                nganh={doc.nganh}
                title={doc.title}
                date={doc.date}
              />
            ))}
          </div>
        </div>
      </div>
    </div>    
   
  );
};

export default Homepage;
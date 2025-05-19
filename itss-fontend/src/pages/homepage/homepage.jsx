import React, { useState, useEffect } from 'react';
import { Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import SurveyDialog from "../../components/survey_dialog"; // Đảm bảo bạn đã tạo component này
import SearchBar from '../../components/searchbar';
import ButtonText from '../../components/buttontext';
import File_Container from '../../components/file_container';
import LoadingScreen from '../../components/loading';
import ErrorScreen from '../../components/error_screen';

import './homepage.css';

const { Title, Text } = Typography;

const Homepage = () => {
  const navigate = useNavigate();

  const [showDialog, setShowDialog] = useState(true); // 👈 Hiển thị dialog khi mở app

  const handleSaveSurvey = (data) => {
    console.log("Thông tin người dùng:", data);
    setShowDialog(false); // Ẩn dialog sau khi lưu
  };

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

  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (documentList.length <= 0) {
      const timer = setTimeout(() => {
        setIsError(true);
      }, 20000);

      return () => clearTimeout(timer);
    } else {
      setIsError(false);
    }
  }, [documentList]);

  const handleRetry = () => {
    setIsError(false);
    // TODO: thêm logic tải lại dữ liệu nếu gọi API
  };

  return (
    <div className="homepage-container">
      {/* Hiển thị Dialog */}
        <SurveyDialog
          visible={showDialog}
          onClose={() => setShowDialog(false)}
          onSave={handleSaveSurvey}
        />
      <div className="homepage-background">
        <div className="homepage-text-container">
          <h1 className="homepage-centered-text">
            Chào mừng bạn đến với trang web!
          </h1>
        </div>

        {/* Thanh Tìm kiếm */}
        <SearchBar />
        
        {/* Các nút category */}
        <div className="homepage-category-container">
          <h2 className="category-centered-text">Có thể bạn quan tâm</h2>
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

        <div className={`white-section ${documentList.length <= 0 ? "white-section--small" : ""}`}>
          <h2 className="section-title-text">Tìm kiếm phổ biến</h2>
          <div className="custom-underline"></div>
          <div className="document-list">
            {documentList.length <= 0 ? (
              isError ? (
                <ErrorScreen
                  message="Không thể tải tài liệu. Vui lòng thử lại."
                  onRetry={handleRetry}
                />
              ) : (
                <LoadingScreen />
              )
            ) : (
              documentList.map((doc, idx) => (
                <File_Container
                  key={idx}
                  nganh={doc.nganh}
                  title={doc.title}
                  date={doc.date}
                  onClick={() => navigate('/docdetail')}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

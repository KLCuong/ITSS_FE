import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SurveyDialog from "../../components/survey_dialog";
import SearchBar from '../../components/searchbar';
import ButtonText from '../../components/buttontext';
import File_Container from '../../components/file_container';
import LoadingScreen from '../../components/loading';
import ErrorScreen from '../../components/error_screen';
import { filterDocuments } from '../../providers/filter_provider';
import './homepage.css';

const Homepage = () => {
  const navigate = useNavigate();

  const [showDialog, setShowDialog] = useState(true);
  const [documentList, setDocumentList] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSaveSurvey = async (data) => {
    console.log("Thông tin người dùng:", data);
    setShowDialog(false);
    setIsLoading(true);
    setIsError(false);

    try {
      const filteredDocs = await filterDocuments({
        year_id: data?.khoa || "",
        department_id: data?.vien || "",
        course_id: data?.nganh || "",
      });
      setDocumentList(filteredDocs);
    
    } catch (error) {
      console.error("Lỗi khi lọc tài liệu:", error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const buttonItems = [
    // "TÀI LIỆU BÁCH KHOA",
    // "KHÓA HỌC",
    // "PHẦN MỀM",
    // "TÀI LIỆU NEU",
    // "IELTS",
    // "TOEIC"
  ];

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
    setShowDialog(true); // Cho phép người dùng nhập lại survey
  };

  return (
    <div className="homepage-container">
      {/* Dialog khảo sát */}
      <SurveyDialog
        visible={showDialog}
        onClose={() => handleSaveSurvey(null)}
        onSave={handleSaveSurvey}
      />


      <div className="homepage-background">

        <div className="homepage-text-container">
          <h1 className="homepage-centered-text">
            Chào mừng bạn đến với trang web!
          </h1>
        </div>


        <SearchBar />

        <div className="homepage-category-container">
          {/* <h2 className="category-centered-text">Có thể bạn quan tâm</h2> */}
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
            {isLoading ? (
              <LoadingScreen />
            ) : isError ? (
              <ErrorScreen
                message="Không thể tải tài liệu. Vui lòng thử lại."
                onRetry={handleRetry}
              />
            ) : (
              documentList.map((doc, idx) => (
                <File_Container
                  key={idx}
                  title={doc.title}
                  nganh={doc?.Course?.name}
                  khoa={doc?.Course?.Department?.name}
                  truong={doc?.Course?.Department?.Faculty?.name}
                  date={new Date(doc.createdAt).toLocaleDateString('vi-VN')}
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


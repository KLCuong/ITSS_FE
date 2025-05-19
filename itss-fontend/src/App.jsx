import { Routes, Route } from 'react-router-dom';
import { useState } from "react";
import { Layout } from 'antd';
import ContactUs from './pages/ContactUs';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AboutUs from './pages/AboutUs';
import AppHeader from './components/header';
import Homepage from './pages/homepage/homepage';
import AppFooter from './components/footer';
import SurveyDialog from "./components/survey_dialog"; // Đảm bảo bạn đã tạo component này

const { Content } = Layout;

function App() {
  const [showDialog, setShowDialog] = useState(true); // 👈 Hiển thị dialog khi mở app

  const handleSaveSurvey = (data) => {
    console.log("Thông tin người dùng:", data);
    setShowDialog(false); // Ẩn dialog sau khi lưu
  };

  return (
    <Layout style={{ minHeight: '100vh', background: '#f0f2f5' }}>
      <AppHeader />
      
      {/* Hiển thị Dialog */}
      <SurveyDialog
        visible={showDialog}
        onClose={() => setShowDialog(false)}
        onSave={handleSaveSurvey}
      />

      <Content
        style={{
          flex: 1,
          overflow: 'auto',
          marginBottom: '120px',
        }}
      >
        <div
          style={{
            background: '#fff',
            padding: 0,
            minHeight: '100%',
            boxSizing: 'border-box',
          }}
        >
          <Routes>
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<Homepage />} />
          </Routes>
        </div>
      </Content>
      <AppFooter />
    </Layout>
  );
}

export default App;

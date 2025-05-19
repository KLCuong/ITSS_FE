import { Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import ContactUs from './pages/ContactUs';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import AboutUs from './pages/AboutUs';
import AppHeader from './components/header';
import Homepage from './pages/homepage/homepage';
import AppFooter from './components/footer';
import SurveyDialog from "./components/survey_dialog"; // Đảm bảo bạn đã tạo component này
import DocumentCard from './pages/doc_detail/docdetails';
import SearchPage from './pages/search_result/search_result';


const { Content } = Layout;

function App() {
  

  return (
    <Layout style={{ minHeight: '100vh', background: '#f0f2f5' }}>
      <AppHeader />
      
      

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
            <Route path='/docdetail' element={<DocumentCard />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path="/" element={<Homepage />} />
          </Routes>
        </div>
      </Content>
      <AppFooter />
    </Layout>
  );
}

export default App;

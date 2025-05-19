import { Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import ContactUs from './pages/ContactUs';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AboutUs from './pages/AboutUs';
import AppHeader from './components/header';
import Homepage from './pages/homepage/homepage';
import Admin from './pages/Admin/Admin';

const { Content } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: '100vh', background: '#f0f2f5' }}>
      {/* <AppHeader /> */}
      <AppHeader/>
      <Content
        style={{
          // padding: '0 50px',
          flex: 1, 
          overflow: 'auto',
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
            <Route path="/" element={<Homepage/>} />
            <Route path="/Admin" element={<Admin/>} />
          </Routes>
        </div>
      </Content>
    </Layout>
  );
}

export default App;
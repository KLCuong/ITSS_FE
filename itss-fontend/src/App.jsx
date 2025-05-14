import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import ContactUs from "./pages/contactus";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import AboutUs from "./pages/aboutus";
import AppHeader from "./components/header";

const { Content } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* <AppHeader /> */}
      <AppHeader />
      <Content
        style={{
          padding: "0 50px",
          flex: 1,
          overflow: "auto",
        }}
      >
        <div
          style={{
            background: "#fff",
            padding: 24,
            minHeight: "100%",
            boxSizing: "border-box",
          }}
        >
          <Routes>
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<h1>Home Page</h1>} />
          </Routes>
        </div>
      </Content>
    </Layout>
  );
}

export default App;

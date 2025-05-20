import { Layout } from 'antd';

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer style={{ textAlign: 'center', backgroundColor: '#f0f2f5', padding: '24px 50px' }}>
      <div>
        <strong>© 2025 Team NoName</strong> — All rights reserved.
      </div>
      <div style={{ marginTop: 8, color: '#888' }}>
        Designed with ❤️ using React + Ant Design
      </div>
    </Footer>
  );
};

export default AppFooter;

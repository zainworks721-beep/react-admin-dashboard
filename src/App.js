import React from 'react';
import { Layout } from 'antd';
import Navbar from './components/Navbar/Navbar';
import StatCards from './components/Card/StatCards';
import UserTable from './components/UserTable/UserTable';
import UserModal from './components/UserModal/UserModal';
import "./App.css"
import AppFooter from './components/Footer/AppFooter';

const { Content, Footer } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Navbar><UserModal /> </Navbar>
      <Content style={{ padding: '20px 50px' }}>
        <StatCards />
        <UserTable />
      </Content>
      <AppFooter />
    </Layout>
  );
}

export default App;
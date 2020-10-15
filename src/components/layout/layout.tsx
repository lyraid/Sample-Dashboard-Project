import React, { useState } from 'react';
import { Layout as AntLayout } from 'antd';
import Header from './header';
import SideBar from './sidebar';
import 'assets/css/layout.css';

interface Props {}

export const Layout: React.FC<Props> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <AntLayout className="brief-layout">
      <SideBar collapsed={collapsed} />
      <AntLayout hasSider={false}>
        <Header collapsed={collapsed} toggle={toggle} />
        {children}
      </AntLayout>
    </AntLayout>
  );
};

export default Layout;
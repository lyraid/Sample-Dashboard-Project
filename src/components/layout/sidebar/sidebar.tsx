import React from 'react';
import { Link } from "react-router-dom";
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  DollarOutlined,
  CalendarOutlined,
  UserOutlined,
} from '@ant-design/icons';

const AntSider = Layout.Sider;

interface Props {
  collapsed: boolean;
}

export const SideBar: React.FC<Props> = props => {
  return (
    <AntSider
      className={"layout-sidebar"}
      trigger={null}
      collapsible
      collapsed={props.collapsed}
      theme={"light"}
    >
      <div className="logo" />
      <Menu
        className="layout-sidebar-menu"
        mode="inline"
        defaultSelectedKeys={['1']}
      >
        <Menu.Item key="1" icon={<HomeOutlined />}>
          Home
          <Link to="/home" />
        </Menu.Item>
        <Menu.Item key="2" icon={<DollarOutlined />}>
          Cases
          <Link to="/case" />
        </Menu.Item>
        <Menu.Item key="3" icon={<DollarOutlined />}>
          Payment
          <Link to="/payment" />
        </Menu.Item>
        <Menu.Item key="4" icon={<CalendarOutlined />}>
          Calendar
          <Link to="/payment" />
        </Menu.Item>
        <Menu.Item key="5" icon={<UserOutlined />}>
          Profile
          <Link to="/profile" />
        </Menu.Item>
      </Menu>
    </AntSider>
  )
};

export default SideBar;
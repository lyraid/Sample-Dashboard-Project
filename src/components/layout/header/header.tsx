import React from 'react';
import {
  Layout as AntLayout,
  Badge as AntBadge,
  Avatar as AntAvatar,
  Menu as AntMenu,
  Dropdown as AntDropdown,
} from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  QuestionCircleOutlined,
  BellOutlined,
  DownOutlined,
} from '@ant-design/icons';
import * as AltAvatar from 'assets/image/alt_avatar.png';
import { userInfo } from 'os';

const AntHeader = AntLayout.Header;

interface Props {
  collapsed?: boolean;
  toggle?: () => void;
  title?: string;
  subHeader?: boolean;
  user?: any;
}

export const Header: React.FC<Props> = props => {
  const menu = (
    <AntMenu>
      <AntMenu.Item key='home'>
        <a href='#'>Home</a>
      </AntMenu.Item>
      <AntMenu.Item key='profile'>
        <a href='#'>Profile</a>
      </AntMenu.Item>
      <AntMenu.Divider />
      <AntMenu.Item key='3'>
        <a href='#'>Log out</a>
      </AntMenu.Item>
    </AntMenu>
  );

  return (
    <AntHeader className='layout-header'>
      { props.subHeader
      ? <div className='header-title'>{props.title}</div>
      : <>
          { props.collapsed
          ? <MenuUnfoldOutlined className='header-trigger' onClick={props.toggle}/>
          : <MenuFoldOutlined className='header-trigger' onClick={props.toggle}/>}
          <div className='header-space' />
          <QuestionCircleOutlined className='header-trigger' />
          <AntBadge count={25}>
            <BellOutlined className='header-trigger' />
          </AntBadge>
          <div className='header-trigger'>
            <AntDropdown overlay={menu} trigger={['click']} placement='bottomRight'>
              <a href='#'>
                <AntAvatar size={32} src={props.user.image} style={{ marginRight: '8px'}} />
                <span style={{ fontSize: '14px', color: '#262626' }}>{props.user.name}</span> <DownOutlined />
              </a>
            </AntDropdown>
          </div>
        </>
      }
    </AntHeader>
  )
};

Header.defaultProps = {
  user: {
    name: 'Jackie Richards',
    image: AltAvatar,
  },
};

export default Header;
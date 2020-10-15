import React from 'react';
import {
  Layout as AntLayout,
  Menu as AntMenu
} from 'antd';
import {
  UserOutlined,
  BuildOutlined,
  BulbOutlined,
} from '@ant-design/icons';

const AntSider = AntLayout.Sider;

interface Props {
  setActivePage: (page: string) => void;
}

export const ProfileSidebar: React.FC<Props> = ({ setActivePage }) => {
  return (
    <AntSider
      trigger={null}
      theme={'light'}
    >
      <AntMenu
        className='profile-sidebar-menu'
        mode='inline'
        defaultSelectedKeys={['Personal']}
        onSelect={({key}) => setActivePage(key.toString())}
      >
        <AntMenu.Item key='Personal' icon={<UserOutlined />}>
          Personal details
        </AntMenu.Item>
        <AntMenu.Item key='Organisation' icon={<BuildOutlined />}>
          Organisation
        </AntMenu.Item>
        <AntMenu.Item key='Notifications' icon={<BulbOutlined />}>
          Notifications
        </AntMenu.Item>
      </AntMenu>
    </AntSider>
  );
};

export default ProfileSidebar;
import React, { useState } from 'react';
import { Layout as AntLayout } from 'antd';
import Header from 'components/layout/header';
import PageContent from 'components/layout/page-content';
import ProfileSidebar from 'components/sections/profile-sidebar';
import ProfileDetails from './profile-details';
import 'assets/css/profile.css';

const AntContent = AntLayout.Content;

interface Props {}

export const Profile: React.FC<Props> = () => {
  const [activePage, setActivePage] = useState('Personal');

  return (
    <AntContent className='layout-content'>
      <PageContent>
        <Header title='Profile' subHeader={true} />
        <AntLayout className='profile-layout'>
          <ProfileSidebar setActivePage={setActivePage} />
          <AntContent>
            <div className='profile-page-content'>
              { (activePage === "Personal" || activePage === "Organisation") && <ProfileDetails activePage={activePage} /> }
            </div>
          </AntContent>
        </AntLayout>
      </PageContent>
    </AntContent>
  );
};

export default Profile;
import React from 'react';
import {
  Row as AntRow,
  Col as AntCol,
} from 'antd';
import ProfileDetailForm from 'components/sections/profile-detail-form';

interface Props {
  activePage: string;
}

export const ProfileDetails: React.FC<Props> = ({ activePage }) => {
  return (
    <div className='personal-details'>
      <AntRow gutter={[24, 24]}>
        <AntCol span={24} className='page-title'>
          {activePage} details
        </AntCol>
      </AntRow>
      <AntRow className='personal-details-header' gutter={[24, 24]}>
        <AntCol span={9} className='personal-details-body'>
          <ProfileDetailForm mode={activePage.toLowerCase()} />
        </AntCol>
      </AntRow>
    </div>
  );
};

export default ProfileDetails;
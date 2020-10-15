import React from 'react';
import {
  Row as AntRow,
  Col as AntCol,
} from 'antd';
import CaseForm from 'components/sections/case-form/case-form';
import FileUpload from 'components/sections/file-upload';

interface Props {}

export const CaseStart: React.FC<Props> = () => {
  return (
    <div className='case-start page-main-content'>
      <AntRow gutter={[24, 24]}>
        <AntCol span={24}>
          <span className='case-start-title'>Start a Case</span>
        </AntCol>
      </AntRow>
      <AntRow gutter={[50, 24]}>
        <AntCol span={9}>
          <CaseForm />
        </AntCol>
        <AntCol span={14}>
          <FileUpload />
        </AntCol>
      </AntRow>
      <div className=''></div>
    </div>
  );
};

export default CaseStart;
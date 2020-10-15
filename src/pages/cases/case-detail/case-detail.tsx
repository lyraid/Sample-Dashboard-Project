import React from 'react';
import {
  Row as AntRow,
  Col as AntCol
} from 'antd';
import CaseDetailProgress from 'components/sections/case-detail-progress';
import CaseDetailTable from 'components/sections/case-detail-table';
import SelectFile from 'components/sections/select-file';

interface Props {
  caseId?: string;
  caseData?: any;
  courts?: any;
}

export const CaseDetail: React.FC<Props> = ({ caseId, caseData, courts }) => {
  return (
    <div className='case-detail'>
      <AntRow gutter={[24, 24]}>
        <AntCol span={24}>
          <CaseDetailProgress caseData={caseData} />
        </AntCol>
      </AntRow>
      <AntRow gutter={[24, 24]}>
        <AntCol span={14}>
          <CaseDetailTable courts={courts} />
        </AntCol>
        <AntCol span={10}>
          <div className="case-detail-file">
            <SelectFile />
          </div>
        </AntCol>
      </AntRow>
    </div>
  );
};

CaseDetail.defaultProps = {
  caseData: {
    title: 'Tim Tom Ltd v. Too Too Pty Ltd',
    number: 'DOC-23982',
    status: 'Lodged',
    created: '1 January 2019',
  },
  courts: [
    {
      key: '1',
      document: 'Form 23 Application for leave',
      filedby: 'B.L. Rabbit',
      date: '1 December 2019',
      status: 'Lodged',
    },
    {
      key: '2',
      document: 'Reasons for decision of Court',
      filedby: 'B.L. Rabbit',
      date: '1 December 2019',
      status: 'Lodged',
    },
    {
      key: '3',
      document: 'Document ABC',
      filedby: 'B.L. Rabbit',
      date: '1 December 2019',
      status: 'Withdrawn',
    },
    {
      key: '4',
      document: 'Document DEF',
      filedby: 'B.L. Rabbit',
      date: '1 December 2019',
      status: 'Lodged',
    },
  ],
};

export default CaseDetail;
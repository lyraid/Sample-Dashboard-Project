import React from 'react';
import ContentTable from 'components/sections/content-table';
import TableControls from 'components/sections/table-controls';

interface Props {}

export const CaseList: React.FC<Props> = () => {
  return (
    <div className='page-main-content'>
      <TableControls />
      <ContentTable />
    </div>
  );
};

export default CaseList;
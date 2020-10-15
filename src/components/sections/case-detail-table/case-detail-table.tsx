import React from 'react';
import {
  Table as AntTable,
  Tag as AntTag,
} from 'antd';

interface Props {
  courts: any;
}

export const CaseDetailTable: React.FC<Props> = ({ courts }) => {
  const columns = [
    {
      title: 'Document',
      dataIndex: 'document',
      key: 'document',
    },
    {
      title: 'Filed by',
      dataIndex: 'filedby',
      key: 'filedby',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: (status: any) => {
        let color;
        switch (status) {
          case 'Lodged':
            color = 'green';
            break;
          case 'Withdrawn':
            color = 'volcano';
            break;
          case 'Pending':
            color = 'orange';
            break;
          default:
            break;
        }
        return (
          <AntTag color={color} key={status}>
            {status}
          </AntTag>
        );
      }
    },
  ];

  return (
    <div className="case-detail-table case-detail-section">
      <p style={{ fontSize: "20px", fontWeight: 500, marginBottom: "10px" }}>Court file</p>
      <AntTable
        columns={columns}
        dataSource={courts}
      />
    </div>
  );
};

export default CaseDetailTable;
import React, { Suspense, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { PageLoader } from 'components/placeholder';
import {
  Table as AntTable,
  Tag as AntTag,
  Button as AntButton,
} from 'antd';

interface Props {
  data?: any[];
}

export const ContentTable: React.FC<Props> = (props) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const history = useHistory();

  const viewCase = (id: number) => {
    history.push(`/case/detail/${id}`);
  };

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Number',
      dataIndex: 'number',
      key: 'number',
    },
    {
      title: 'Created',
      dataIndex: 'created',
      key: 'created',
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
    {
      title: 'Action',
      key: 'action',
      render: (text: any, record: any) => (
        // <a href={"/case/" + record.id}>View</a>
        <AntButton type='link' onClick={() => viewCase(record.id)}>View</AntButton>
      ),
    },
  ];

  const onSelectChange = (selectedRowKeys: any) => {
    // console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys(selectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <Suspense fallback={<PageLoader />}>
      <AntTable
        rowSelection={rowSelection}
        columns={columns}
        dataSource={props.data}
      />
    </Suspense>
  );
};

ContentTable.defaultProps = {
  data: [
    {
      key: '1',
      id: 1001,
      title: 'Applicant ABC v. Lawyer DEF',
      number: 'DOC-29834',
      created: '1 January 2019',
      status: 'Lodged',
    },
    {
      key: '2',
      id: 1032,
      title: 'Tim Tom Ltd v. Too Too Pty Ltd',
      number: 'DOC-29892',
      created: '8 April 2020',
      status: 'Lodged',
    },
    {
      key: '3',
      id: 1005,
      title: 'McGee & Sons v. Sons',
      number: 'DOC-49588',
      created: '7 July 2020',
      status: 'Withdrawn',
    },
    {
      key: '4',
      id: 1025,
      title: 'Jungle Gin v. Vodka Martini',
      number: 'DOC-90823',
      created: '30 June 2018',
      status: 'Pending',
    },
    {
      key: '5',
      id: 1032,
      title: 'Tim Tom Ltd v. Too Too Pty Ltd',
      number: 'DOC-29892',
      created: '8 April 2020',
      status: 'Lodged',
    },
    {
      key: '6',
      id: 1005,
      title: 'McGee & Sons v. Sons',
      number: 'DOC-49588',
      created: '7 July 2020',
      status: 'Withdrawn',
    },
    {
      key: '7',
      id: 1025,
      title: 'Jungle Gin v. Vodka Martini',
      number: 'DOC-90823',
      created: '30 June 2018',
      status: 'Pending',
    },
  ],
};

export default ContentTable;
import React from 'react';
import {
  Input as AntInput,
  Button as AntButton,
  Divider as AntDivider,
} from 'antd';
import {
  PrinterOutlined,
  MoreOutlined,
  FilterOutlined,
  SearchOutlined,
} from '@ant-design/icons';

interface Props {}

export const TableControls: React.FC<Props> = () => {
  return (
    <div className="table-controls">
      <AntInput
        className="controls-search-box"
        prefix={<SearchOutlined />}
        placeholder="Search your Cases"
      />
      <div className="table-controls-space" />
      <AntButton
        className="table-controls-between"
        icon={<PrinterOutlined />}
      >
        Print
      </AntButton>
      <AntDivider
        className="table-controls-between"
        type="vertical"
        style={{height: "unset"}}
      />
      <AntButton
        className="table-controls-between"
        icon={<FilterOutlined />}
      />
      <AntButton icon={<MoreOutlined />} />
    </div>
  )
};

export default TableControls;
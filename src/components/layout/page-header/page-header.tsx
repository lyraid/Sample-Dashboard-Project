import React from 'react';
import { PageHeader as AntPageHeader } from 'antd';

interface Props {
  title: string;
  routes?: any[];
  footer?: React.ReactNode;
}

export const PageHeader: React.FC<Props> = ({ title, children, ...props }) => {
  const routes = props.routes;

  return (
    <AntPageHeader
      className={"page-header"}
      title={title}
      breadcrumb={{ routes }}
      {...props}
    >
      {children}
    </AntPageHeader>
  )
}

PageHeader.defaultProps = {
  routes: [
    {
      path: 'index',
      breadcrumbName: '',
    },
    {
      path: 'first',
      breadcrumbName: 'Home',
    },
    {
      path: 'second',
      breadcrumbName: 'Cases',
    },
  ],
};

export default PageHeader;
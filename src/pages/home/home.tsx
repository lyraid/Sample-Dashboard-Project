import React from 'react';
import PageHeader from 'components/layout/page-header';
import PageContent from 'components/layout/page-content';
import Recommended from 'components/sections/recommended';
import ContentTable from 'components/sections/content-table';
import TableControls from 'components/sections/table-controls';
import { Layout as AntLayout } from 'antd';
import 'assets/css/home.css';

const AntContent = AntLayout.Content;

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <AntContent className="layout-content">
      <PageHeader
        title={"Home"}
        routes={[
          {
            path: 'index',
            breadcrumbName: '',
          },
          {
            path: 'first',
            breadcrumbName: 'Home',
          },
        ]}
      >
      </PageHeader>
      <PageContent>
        <Recommended />
        <div className="page-main-content">
          <TableControls />
          <ContentTable />
        </div>
      </PageContent>
    </AntContent>
  );
};

export default Home;

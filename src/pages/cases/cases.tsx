import React, { useState, Suspense, lazy } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import PageHeader from 'components/layout/page-header';
import PageContent from 'components/layout/page-content';
import { PageLoader } from 'components/placeholder';
import {
  Layout as AntLayout,
  Tabs as AntTabs,
  Button as AntButton,
} from 'antd';
import {
  FolderOpenOutlined,
  PlusCircleOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import 'assets/css/cases.css';

const CaseList = lazy(() => import('pages/cases/case-list'));
const CaseDetail = lazy(() => import('pages/cases/case-detail'));
const CaseStart = lazy(() => import('pages/cases/case-start'));
const CaseJoin = lazy(() => import('pages/cases/case-join'));
const AntContent = AntLayout.Content;
const AntTabPane = AntTabs.TabPane;

interface Props {}

export const Cases: React.FC<Props> = () => {
  const [activeTab, setActiveTab] = useState('cases');
  const history = useHistory();

  const switchTab = (key: string) => {
    switch (key) {
      case 'cases':
        history.push('/case');
        break;
      case 'start':
        history.push('/case/start');
        break;
      case 'join':
        history.push('/case/join');
        break;
    }
  };

  const handleClick = () => {
    setActiveTab('cases');
    history.push('/case');
  }

  return (
    <AntContent className='layout-content'>
      <PageHeader
        title={'Cases'}
        routes={[
          {
            path: 'index',
            breadcrumbName: '',
          },
          {
            path: 'first',
            breadcrumbName: 'Cases',
          },
        ]}
        footer={
          <div className='case-page-header-footer'>
            <AntTabs defaultActiveKey={activeTab} onTabClick={(key: string) => switchTab(key)}>
              <AntTabPane tab={<span><FolderOpenOutlined />My Cases</span>} key='cases' />
              <AntTabPane tab={<span><PlusCircleOutlined />Start a Case</span>} key='start' />
              <AntTabPane tab={<span><TeamOutlined />Join a Case</span>} key='join' />
            </AntTabs>
            <AntButton type='primary' icon={<PlusCircleOutlined />} onClick={handleClick}>
              Start a Case
            </AntButton>
          </div>
        }
      >
      </PageHeader>
      <PageContent>
        <Suspense fallback={<PageLoader />}>
          <Switch>
            <Route exact path='/case' component={CaseList} />
            <Route exact path='/case/detail/:id' component={CaseDetail} />
            <Route exact path='/case/start' component={CaseStart} />
            <Route exact path='/case/join' component={CaseJoin} />
          </Switch>
        </Suspense>
      </PageContent>
    </AntContent>
  )
};

export default Cases;
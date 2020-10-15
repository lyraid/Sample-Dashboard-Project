import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from './protected-route';
import PublicRoute from './public-route';
import Layout from 'components/layout';

// const Login = lazy(() => import('pages/login'));
// const Home = lazy(() => import('pages/home'));
// const Cases = lazy(() => import('pages/cases'));
// const NotFound = lazy(() => import('pages/not-found'));
import Home from 'pages/home';
import Cases from 'pages/cases';
import Login from 'pages/login';
import NotFound from 'pages/not-found';
import Profile from 'pages/profile';

export type TAppProps = {
  [key: string]: any;
};

interface Props {
  appProps?: TAppProps;
}

export const Routes: React.FC<Props> = () => {
  return (
    // TODO: layout based on authentication
    <Layout>
      <Switch>
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/home" component={Home} />
        <ProtectedRoute path="/case" component={Cases} />
        <ProtectedRoute path="/profile" component={Profile} />
        <PublicRoute exact path="/login" component={Login} />          
        {/* Finally, catch all unmatched routes */}
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
};

export default Routes;

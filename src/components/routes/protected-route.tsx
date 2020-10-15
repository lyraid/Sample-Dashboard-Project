import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
// import Layout from 'components/layout';

interface ProtectedRouteProps extends RouteProps {
  component: React.ComponentType<any>;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component: PageComponent,
  ...props
}) => {
  // const location = useLocation();

  // if (false) {
  //   const loginPath = '/login';
  //   const redirectPath = location
  //     ? `${loginPath}?redirect=${location.pathname}${location.search}`
  //     : loginPath;
  //   return <Redirect to={redirectPath} />;
  // }

  return (
    <Route {...props}>
      <PageComponent />
    </Route>
  );
};

export default ProtectedRoute;

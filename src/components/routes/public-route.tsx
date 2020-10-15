import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

export interface PublicRouteProps extends RouteProps {
  component: React.ComponentType<any>;
}

export const PublicRoute: React.FC<PublicRouteProps> = ({
  component: PageComponent,
  ...props
}) => {
  // let redirectPath = '/';

  return (
    <Route {...props}>
      <PageComponent />
    </Route>
  );
};

export default PublicRoute;

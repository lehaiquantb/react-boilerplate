import React, { Suspense, lazy } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
// import ErrorNotFound from '../components/common/ErrorNotFound';
import LayoutMenu from './LayoutMenu';
import { Spin } from 'antd';
import PrivateRoute from '../../router/PrivateRoute';
import { getRoutesFromContainer } from '../../router/index';
// const Rooms = lazy( () => import("routers/RoomsRoute"));
const context = require.context(`./screens`, true, /route.js$/);
const routes = getRoutesFromContainer(context);
function AppRoute() {
  return (
    <LayoutMenu>
      <Suspense fallback={<Spin />}>
        <Switch>
          {routes}
        </Switch>
      </Suspense>
    </LayoutMenu>
  );
}

export default AppRoute;

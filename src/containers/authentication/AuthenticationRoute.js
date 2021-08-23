import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Spin } from 'antd';
import PrivateRoute from '../../router/PrivateRoute';
import { getRoutesFromContainer } from '../../router/index';
// const Rooms = lazy( () => import("routers/RoomsRoute"));
const context = require.context(`./screens`, true, /route.js$/);
const routes = getRoutesFromContainer(context);
function AppRoute() {
  return (
    <Suspense fallback={<Spin />}>
      <Switch>
        {routes}
      </Switch>
    </Suspense>
  );
}

export default AppRoute;

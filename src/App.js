import React, { lazy } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import 'antd/dist/antd.css';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AppRoute from './containers/app/AppRoute';
import AuthenticationRoute from './containers/authentication/AuthenticationRoute';
// import { auth } from './redux/actions/user';
//import PrivateRoute from './containers/PrivateRoute';
import { Spin } from 'antd';
import './App.css';
import history from './helpers/history';



function App() {
  // const dispatch = useDispatch();
  // const { isAuthRequesting } = useSelector((state) => state.user);
  // useEffect(() => {
  //   dispatch(auth());
  //   console.log('authenticating...');
  //   //history.push('/login');
  // }, []);

  return (
    <Router history={history}>
      <React.Suspense fallback={<Spin></Spin>}>
        <Switch>
          <Route component={AuthenticationRoute} path="*" exact />
          <Route component={AppRoute} path="*" exact />
        </Switch>
      </React.Suspense>
    </Router>
  );
}

export default App;

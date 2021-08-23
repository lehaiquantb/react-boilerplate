import store from "../redux/index";
import React, { Suspense, lazy } from 'react';
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export function getRoutesFromContainer(context) {
    let routes = [];
    context.keys().forEach((path) => {
        routes.push(context(`${path}`).default);
        if (context(`${path}`).childRoutes) {
            context(`${path}`).childRoutes.forEach((childRoute) => {
                routes.push(childRoute);
            });
        }
    });
    return routes.map(
        ({ component: Component, exact = true, path, isPrivate, ...rest }) => {
            if (isPrivate) {
                return (
                    <PrivateRoute
                        key={path}
                        component={Component}
                        exact={exact}
                        path={path}
                        {...rest}
                    />
                )
            } else return (<PublicRoute
                key={path}
                component={Component}
                exact={exact}
                path={path}
                {...rest}
            />)
        },
    )
}

export const initModules = async (modules = [], container = 'app') => {
    await Promise.all([
        modules.map(async item => {
            const [reducer, saga] = await Promise.all([
                import(`../containers/${container}/screens/${item.path}/reducer`),
                import(`../containers/${container}/screens/${item.path}/saga`),]);
            store.injectReducer(item.key, reducer.default)
            store.injectSaga(item.key, saga.default);
        })
    ]);

    return "ok";
};

// export const initModule

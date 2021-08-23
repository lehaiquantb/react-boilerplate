import React from 'react';
import { Redirect, Route, useHistory } from 'react-router-dom';
function PublicRoute({ component: Component, ...rest }) {
    const history = useHistory();
    return (
        <Route
            {...rest}
            render={(props) => {
                return <Component {...props} />
            }}
        />
    );
}
export default PublicRoute;

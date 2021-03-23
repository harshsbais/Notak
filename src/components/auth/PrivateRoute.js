import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';
import { getToken } from '../../Redux'


const PrivateRoute = ({ component: Component, ...rest }) => {
    const accessToken = useSelector(state => state.accessToken)
    console.log(accessToken);
    return (
        <Route
            {...rest}
            render={props =>
                accessToken && accessToken.payload.length > 0 ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    )
};

export default PrivateRoute;
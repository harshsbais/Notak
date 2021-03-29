import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { getAccessToken } from './dataHelpers';
import { useSelector, useDispatch } from 'react-redux';
import { getToken } from '../../Redux'
import { read_cookie, bake_cookie } from 'sfcookies';


const PrivateRoute = ({ component: Component, ...rest }) => {
    const accessToken = useSelector(state => state.accessToken)
    const dispatch = useDispatch();
    if (!accessToken) {
        const refreshToken = read_cookie("refresh")
        getAccessToken({ 'refresh': refreshToken })
            .then(async res => {
                bake_cookie("refresh", res.data.refresh);
                dispatch(getToken({ payload: res.data.access }))
            })
            .catch((err) => {
                console.log(err)
            })
    }
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
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { performLogin } from './dataHelpers';
import { bake_cookie, read_cookie } from 'sfcookies';
import { getAccessToken } from './dataHelpers';
import { getToken } from '../../Redux'
import './Login.css'

export const Login = (props) => {
    const accessToken = useSelector(state => state.accessToken)
    const dispatch = useDispatch()
    const history = useHistory();
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
    if (accessToken && accessToken.payload.length > 0)
        history.push('/dashboard')
    const [userDetails, setUserDetails] = useState({
        email: 'abcd@edfg.com',
        password: '12345678@!'
    });
    const [Utils, setUtils] = useState({
        loading: false,
        success: false,
        error: false
    })
    const handleChange = (event) => {
        setUserDetails({
            ...userDetails,
            [event.target.name]: event.target.value
        });
    }
    console.log(accessToken)
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userDetails);
        performLogin(userDetails)
            .then(async res => {
                console.log(res);
                bake_cookie("refresh", res.data.refresh);
                dispatch(getToken({ payload: res.data.access }))
                history.push('/dashboard');
            })
            .catch((err) => {
                console.log(err)
                setUtils(err);
            })
    }
    return (
        <div className="login">
            <div className="wrapper overflow-hidden">
                <div className="row">
                    <div className="col-lg-5"></div>
                    <div className="col-lg-3">
                        <p className="top-head">Welcome Back</p>
                        <div>
                            {
                                Utils.error && <div style={{ color: "red" }}>{Utils.error.non_field_errors ? Utils.error.non_field_errors : Utils.error.email}</div>
                            }
                        </div>
                        <form className="mt-5" onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Your Email Address</label>
                                <input type="email" name="email" className="form-control" placeholder="Eg: abhisjain1508@gmail.com"
                                    id="exampleInputEmail1" onChange={handleChange} value={userDetails.email} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" name="password" onChange={handleChange} className="form-control" placeholder="* * * * * * *"
                                    id="exampleInputPassword1" value={userDetails.password} />
                                <Link to="/password-reset" className="forgot">Forgot password?</Link>
                            </div>
                            <button type="submit" className="btn btn-login mt-3" disabled={Utils.loading}>{Utils.loading ? 'Loading..' : 'Login'}</button>
                            <p className="signup text-center pt-2">Not a member? &nbsp;<Link to="/signup" className="signup-a">Signup</Link></p>
                        </form>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
                <div className="go-back">
                    <Link to="/">
                        <i className="fa fa-times"></i>
                    </Link>
                </div>
            </div>
        </div>
    )
}


export default Login;
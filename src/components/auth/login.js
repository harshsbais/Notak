import React, { useState, useEffect } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom';
// import { performLogin, tokenKey } from './dataHelpers';
import './Login.css'

export const Login = (props) => {
    const history = useHistory();
    const [UserDetails, setUserDetails] = useState({
        username: "hardikhere",//hardikhere
        email: "web.hardikhere@gmail.com",//web.hardikhere@gmail.com
        password: "hardik009"//hardik009   will removeLater
    });
    const [Utils, setUtils] = useState({
        loading: false,
        success: false,
        error: false
    })
    const handleChange = (event) => {
        setUserDetails({
            ...UserDetails,
            [event.target.name]: event.target.value
        });
    }

    return (
        <div className="login">
            <div class="wrapper overflow-hidden">
                <div class="row">
                    <div class="col-lg-5"></div>
                    <div class="col-lg-3">
                        <p class="top-head">Welcome Back</p>
                        <div>
                            {
                                Utils.error && <div style={{ color: "red" }}>{Utils.error.non_field_errors ? Utils.error.non_field_errors : Utils.error.email}</div>
                            }
                        </div>
                        <form class="mt-5">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Your Email Address</label>
                                <input type="email" name="email" class="form-control" placeholder="Eg: abhisjain1508@gmail.com"
                                    id="exampleInputEmail1" onChange={handleChange} value={UserDetails.email} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" name="password" onChange={handleChange} class="form-control" placeholder="* * * * * * *"
                                    id="exampleInputPassword1" value={UserDetails.password} />
                                <Link to="/password-reset" class="forgot">Forgot password?</Link>
                            </div>
                            <Link to='/dashboard'><button type="submit" class="btn btn-login mt-3" disabled={Utils.loading}>{Utils.loading ? 'Loading..' : 'Login'}</button></Link>
                            <p class="signup text-center pt-2">Not a member? &nbsp;<Link to="/register" class="signup-a">Signup</Link></p>
                        </form>
                    </div>
                    <div class="col-lg-4"></div>
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
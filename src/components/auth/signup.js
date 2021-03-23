import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { performSignup } from './dataHelpers';
import { Toast } from 'react-bootstrap';
import './Login.css'

export const SignUp = (props) => {
    const [userDetails, setUserDetails] = useState({});
    const [alert, setAlert] = useState(false);
    const [failureAlert, setFailureAlert] = useState(false);
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
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userDetails);
        performSignup(userDetails)
            .then(async res => {
                console.log(res);
                setAlert(true);
            })
            .catch((err) => {
                console.log(err)
                setFailureAlert(true);
                setUtils({
                    loading: false,
                    success: false,
                    error: err.response.detail
                })
            })
    }

    return (
        <div className="login">
            <Toast style={{ float: 'right', backgroundColor: '#f34636', color: 'white' }} onClose={() => setFailureAlert(false)} show={failureAlert} delay={3000} autohide>
                <Toast.Body>Some Error Occured</Toast.Body>
            </Toast>
            <Toast style={{ float: 'right', backgroundColor: '#52af50', color: 'white' }} onClose={() => setAlert(false)} show={alert} delay={3000} autohide>
                <Toast.Body>Verification E-mail sent</Toast.Body>
            </Toast>
            <div class="wrapper overflow-hidden">
                <div class="row">
                    <div class="col-lg-5"></div>
                    <div class="col-lg-3">
                        <p class="top-head">Sign Up</p>
                        <div>
                            {
                                Utils.error && <div style={{ color: "red" }}>{Utils.error.non_field_errors ? Utils.error.non_field_errors : Utils.error.email}</div>
                            }
                        </div>
                        <form class="mt-5" onSubmit={handleSubmit}>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Your Email Address</label>
                                <input type="email" name="email" class="form-control" placeholder="Eg: abhisjain1508@gmail.com"
                                    id="exampleInputEmail1" onChange={handleChange} value={userDetails.email} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" name="password" onChange={handleChange} class="form-control" placeholder="* * * * * * *"
                                    id="exampleInputPassword1" value={userDetails.password} />
                                <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                                <input type="password" name="password2" onChange={handleChange} class="form-control" placeholder="* * * * * * *"
                                    id="exampleInputPassword1" value={userDetails.password2} />
                            </div>
                            <button type="submit" class="btn btn-login mt-3" disabled={Utils.loading}>{Utils.loading ? 'Loading..' : 'Login'}</button>
                            <p class="signup text-center pt-2">Already a member?<Link to="/login" class="signup-a">Login</Link></p>
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
export default SignUp;
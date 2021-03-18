import React from 'react'
import { Link } from 'react-router-dom';
function login() {
    return (
        <div>
            Login
            <br />
            <Link to="/dashboard">Dash</Link>
        </div>
    )
}

export default login

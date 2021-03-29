import React from 'react'
import { Link } from 'react-router-dom';
function Home() {
    return (
        <div>
            <center><h1>Notak</h1>
                <br />
                <h3>Let's revolutionise note taking</h3>
                <Link to="/login">Login</Link>
                <br />
                <Link to="/signup">Signup</Link>
            </center>
        </div>
    )
}

export default Home

import React from 'react'
import { Link } from 'react-router-dom';
function Home() {
    return (
        <div>
            Hey there fraands
            <br />
            <Link to="/login">Login</Link>
            <br />
            <Link to="/signup">Signup</Link>
        </div>
    )
}

export default Home

import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css'
import logo from '../../logo.png';
function Home() {
    return (
        <div className="home">
            <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand" href="#" ><img style={{ height: "8vh" }} src={logo} /></a>
            </nav>
            <center><h1 style={{ fontFamily: "Dancing Script", fontSize: "100px" }}>Notak</h1>
                <br />
                <h3 style={{ fontFamily: "Dancing Script" }}>Let's revolutionise note taking</h3>
                <div style={{ marginTop: "50px" }}>
                    <Link to="/login"><Button style={{ color: "black", backgroundImage: "linear-gradient(to right, #84fab0 0%, #8fd3f4 51%, #84fab0 100%)", borderRadius: "10px", height: "50px", marginRight: "5vw", width: "150px" }}>Login</Button></Link>
                    <Link to="/signup"><Button style={{ color: "black", backgroundImage: "linear-gradient(to right, #84fab0 0%, #8fd3f4 51%, #84fab0 100%)", borderRadius: "10px", height: "50px", width: "150px" }}>SignUp</Button></Link>
                </div>
            </center>
        </div >
    )
}

export default Home

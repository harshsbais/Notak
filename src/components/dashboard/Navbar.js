import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import './Navbar.css'
function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    return (
        <>
            <div className="nav">
                <Link to="#" className='menu-bars'>
                    <FaIcons.FaBars style={{ color: '#fff' }} onClick={(e) => setSidebar(true)} />
                </Link>
                <input type="text" className="mx-auto" placeholder="   &#xF002;   Search" style={{ width: '50vw', height: '5vh', fontFamily: 'Arial, FontAwesome', outline: 'none' }} />
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items'>
                    <li className='navbar-toggle' >
                        <Link to="#" className='menu-bars'>
                            <AiIcons.AiOutlineClose style={{ color: '#fff' }} onClick={(e) => setSidebar(false)} />
                        </Link>
                    </li>
                    <li className='nav-text' >
                        <Link to="#">
                            <AiIcons.AiTwotoneBulb />
                            <span>Notes</span>
                        </Link>
                    </li>
                    <li className='nav-text' >
                        <Link to="#">
                            <BsIcons.BsPen />
                            <span>Lables</span>
                        </Link>
                    </li>
                    <li className='nav-text' >
                        <Link to="#">
                            <BsIcons.BsPen />
                            <span>Labels 1</span>
                        </Link>
                    </li>
                    <li className='nav-text' >
                        <Link to="#">
                            <BsIcons.BsPen />
                            <span>Labels 2</span>
                        </Link>
                    </li>
                    <li className='nav-text' >
                        <Link to="#">
                            <BsIcons.BsArchiveFill />
                            <span>Archive</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar

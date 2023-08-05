import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './NavbarStyle.css'
import mobileworld from '../../img/mobileworld.png'
const Navbar = () => {
    const[ismobile, setIsmobile]=useState(false);
  return (
    <>
        <nav className="navbar">
            <div className="logo">
                <img src={mobileworld} alt="" />
                <h3>Mworld</h3>
            </div>
            <ul className={ismobile? "nav-link-mobile" : "nav-link"} onClick={()=>{setIsmobile(false)}}>
                <Link to="/" className="home">
                    <li>Home</li>
                </Link>
                <Link to="/about" className="about">
                    <li>About</li>
                </Link>
                <Link to="/service" className="service">
                    <li>Service</li>
                </Link>
                <Link to="/contact" className="contact">
                    <li>Contact</li>
                </Link>
                <Link to="/signin" className="signin">
                    <li>Sign in</li>
                </Link>
                <Link to="/signup" className="signup">
                    <li>Sign Up</li>
                </Link>
            </ul>
            <button className="mobile-menu-icon" onClick={()=>{setIsmobile(!ismobile)}}>
                    {ismobile ? <i className='fas fa-times'></i> : <i className='fas fa-bars'></i>}
            </button>
        </nav>
    </>
  )
}

export default Navbar

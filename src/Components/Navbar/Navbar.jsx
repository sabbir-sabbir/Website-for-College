import React, { useState, useEffect } from 'react'
import {Link} from 'react-scroll';
import './Navbar.css'

const Navbar = () => {
      const [colorChange, setColorChange] = useState(false);

        useEffect(()=> {
           window.addEventListener('scroll', ()=> {
            window.scrollY > 600 ? setColorChange(true) : setColorChange(false);
      })
    }, []);
  return (
    <>
    <nav className={`container ${colorChange ? 'dark-nav': ''}`}>
        <img src="logo.png" alt="nav-logo" className="class-for-logo"  />
        <ul>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='Program' smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
            <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
            <li><Link to='contact' smooth={true} offset={-260} duration={500}><button className="btn contact-btn">Contact us</button></Link></li>
        </ul>

    </nav>
    </>
  )
}

export default Navbar
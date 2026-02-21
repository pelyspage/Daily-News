import React, { useState } from 'react'
import '../CSS/Navbar.css'
import { Link } from "react-router-dom"
import logo from '../assets/logo.png'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'  // ← add this

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="Navbar">
        <div className='logo-container'>
          <img src={logo} alt="Daily News" className='logo' />
          <h2 className='logo-text'>Daily News</h2>
        </div>

        {/* Hamburger icon */}
        <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
          { menuOpen ? <RiCloseLine size={28} /> : <RiMenu3Line size={28} /> }  {/* ← replace the spans with this */}
        </div>
        
        {/* Links */}
        <div className={ `links ${menuOpen ? 'open' : '' }` }>
          <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/business" className="nav-link" onClick={() => setMenuOpen(false)}>Business</Link>
          <Link to="/entertainment" className="nav-link" onClick={() => setMenuOpen(false)}>Entertainment</Link>
          <Link to="/health" className="nav-link" onClick={() => setMenuOpen(false)}>Health</Link>
          <Link to="/science" className="nav-link" onClick={() => setMenuOpen(false)}>Science</Link>
          <Link to="/sport" className="nav-link" onClick={() => setMenuOpen(false)}>Sport</Link>
          <Link to="/technology" className="nav-link" onClick={() => setMenuOpen(false)}>Technology</Link>
        </div>
    </div>
  )
}

export default Navbar;

// export default Navbar
import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";
import './Navbar.css'
import BlueButton from './components/blueButton';
import WhiteButton from './components/whiteButton'
import Logo from './assets/ConsoltLogo.png'
import MenuIcon from '@mui/icons-material/Menu';


const Navbar = () => {
  const [showCarousel, setShowCarousel] = useState(false)
  
  const carousel = () => {setShowCarousel((prev) => !prev)}

  return (
    <nav className='fixedNav'>
        <Link to="/">
          <div className="logo">
            <img src={Logo} alt="Consolt" />
          </div>
        </Link>
        
        <div className="buttons">
          <Link to="/blog" style={{ textDecoration: 'none' }}>
            <WhiteButton name="Blog"/>
          </Link>
          <a href='#footer'><BlueButton name="Join our Community" /></a>
        </div>
        {showCarousel && (
        <div className="mobilelinks" id='menuItem'>
          <Link to="/blog" style={{ textDecoration: 'none' }}>Blog</Link>
          <a href='#footer'>Join our Community</a>
        </div> 
        )}
        <a className="caro" onClick={carousel}><MenuIcon /></a>
    </nav>
  )
  

}

export default Navbar
import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './Navbar.css'
import BlueButton from './components/blueButton';
import WhiteButton from './components/whiteButton'
import Logo from './assets/ConsoltLogo.png'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useInView } from 'react-intersection-observer';
// Collapsable package
import { Collapsible } from 'collapsible-react-component'
import 'collapsible-react-component/dist/index.css'

const Navbar = () => {
  const [navPosition, setNavPosition] = useState(false)
  const [showCarousel, setShowCarousel] = useState(false)
  const carousel = () => {setShowCarousel((prev) => !prev)}

  const [openMenu, setOpenMenu] = useState(false)


  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.7,
    initialInView: true
  });

  const [stickyClass, setStickyClass] = useState(false);
    function stickNavbar() {
        let windowHeight = window.scrollY;

        if (windowHeight > 200) {
          setStickyClass(true)
        } else {
          setStickyClass(false)
        }


    }

    useEffect(() => {
        window.addEventListener("scroll", stickNavbar);
         return () => {
           window.removeEventListener('scroll', stickNavbar);
     };
    }, []);

  return (
    <nav className={!stickyClass? "navBasics defaultFixedNav" : "navBasics fixedNav"}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', position: 'relative', backgroundColor: 'inherit'}}>
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
        {/* {showCarousel && (
        <div className="mobilelinks" id='menuItem'>
          <Link to="/blog" style={{ textDecoration: 'none' }}>Blog</Link>
          <a href='#footer'>Join our Community</a>
        </div> 
        )} */}
        <a className="caro" onClick={() => {setOpenMenu(!openMenu)}}>
          {!openMenu? <MenuIcon /> : <CloseIcon />}
        </a>
      </div>
      <Collapsible open={openMenu}>
          <div className='mobileSearchDisplay'>
              <div className="mobilelinks" id='menuItem'>
                <Link to="/blog" style={{ textDecoration: 'none' }}>Blog</Link>
                <hr />
                <a href='#footer'>Join our Community</a>
              </div> 
          </div>
      </Collapsible>
    </nav>
  )
  

}

export default Navbar
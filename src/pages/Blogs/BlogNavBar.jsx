import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";
import Logo from '../../assets/ConsoltLogo.png'
import BlueButton from '../../components/blueButton'
import WhiteButton from '../../components/whiteButton';
import SearchBar from '../../components/searchBar';
import './blogNavBar.css'
import MenuIcon from '@mui/icons-material/Menu';



const BlogNavBar = () => {
  
    const [showCarousel, setShowCarousel] = useState(false)
  const carousel = () => {setShowCarousel((prev) => !prev)}
  return (
      <div>
        <nav className="blogNav">
            <a className="caro" onClick={carousel}><MenuIcon /></a>
            <Link to="/">
            <div className="logo">
                <img src={Logo} alt="Consolt" />
            </div>
            </Link>

            <div className="navButtons">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <WhiteButton name="Home"/>
                </Link>{" "}


                <Link to="/community" style={{ textDecoration: 'none'}}>
                    <BlueButton name="Join our Community"/>
                </Link>
            </div>
            {showCarousel && (
            <div className="mobilelinks" id='menuItem'>
            <Link to="/blog" style={{ textDecoration: 'none' }}>Blog</Link>
            <a href='#footer'>Join our Community</a>
            </div> 
            )}

            <SearchBar className='searcher'/>
        </nav>
    </div>
  )
}

export default BlogNavBar
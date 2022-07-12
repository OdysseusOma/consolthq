import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";
import Logo from '../../assets/ConsoltLogo.png'
import BlueButton from '../../components/blueButton'
import WhiteButton from '../../components/whiteButton';
import SearchBar from '../../components/searchBar';
import './blogNavBar.css'
import MenuIcon from '@mui/icons-material/Menu';
import NewsletterForm from '../../components/NewsletterForm'
import NewsletterImg from '../../assets/Build a community.png'



const BlogNavBar = () => {
  
    const [showCommunity, setShowCommunity] = useState(false)
    const [showCarousel, setShowCarousel] = useState(false)


  const carousel = () => {setShowCarousel((prev) => !prev)}
  const community = () => {setShowCommunity((prev) => !prev)}
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


                
                <div onClick={community}>
                    <BlueButton name="Join our Community" />
                </div>
                
                
            </div>
            {showCarousel && (
            <div className="mobilelinks" id='menuItem'>
            <Link to="/blog" style={{ textDecoration: 'none' }}>Blog</Link>
            <a href='#footer'>Join our Community</a>
            </div> 
            )}

            { 
                showCommunity === true? 
                (
                <div className='communityPopUpWrap'>
                    <div className='communityPopUp'>
                        <div className="newsletterWrapper">
                            <div className="newsletterTextBox">
                            <p className="newsletterText">We’re a company leveraging on existing technologies to provide easy-to-use and easy-to-access services. We’re building a health community online, we’ll like you to join us today.</p>
                            <div><NewsletterForm /></div>
                            </div>

                            <div className="newsletterImgWrap">
                            <img src={NewsletterImg} alt="" className="newsletterImg" />
                            </div>
                        </div>
                    </div>
                </div>) :
                (null)
            }
            <SearchBar className='searcher'/>
        </nav>
    </div>
  )
}

export default BlogNavBar
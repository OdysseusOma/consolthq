import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";
import Logo from '../../assets/ConsoltLogo.png'
import BlueButton from '../../components/blueButton'
import WhiteButton from '../../components/whiteButton';
import SearchBar from '../../components/searchBar';
import './blogNavBar.css'
import MenuIcon from '@mui/icons-material/Menu';
import NewsLetter from '../../NewsLetter';
import SearchIcon from '@mui/icons-material/Search';

// Collapsable package
import { Collapsible } from 'collapsible-react-component'
import 'collapsible-react-component/dist/index.css'


const BlogNavBar = () => {
  
    const [showCommunity, setShowCommunity] = useState(false)
    const [showCarousel, setShowCarousel] = useState(false)
    const [open, setOpen] = useState(false)


  const carousel = () => {setShowCarousel((prev) => !prev)}
  const community = () => {setShowCommunity((prev) => !prev)}
  return (
      <div>
        <nav className="blogNav">
            <Link to="/">
            <div className="logo">
                <img src={Logo} alt="Consolt" className='logoImg'/>
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
            <div className="mobileBlogLinks" id='menuItem'>
            <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
            <a onClick={community}>Join our Community</a>
            </div> 
            )}

            { 
                showCommunity === true? 
                (
                <div className='communityPopUpWrap'>
                    <div className='communityPopUp'>
                        <div className="newsletterWrapper">
                            <NewsLetter />
                        </div>
                    </div>
                </div>) :
                (null)
            }
            <div className='searchComponent'>
                <SearchBar className='searcher'/>
            </div>
            <div className='mobileSearchWrap'>
                <a onClick={() => {setOpen(!open)}}><SearchIcon /></a>
                <a className="caro" onClick={carousel}><MenuIcon /></a>
            </div>
        </nav>
        <Collapsible open={open}>
            <div className='mobileSearchDisplay'>
                <SearchBar />
            </div>
        </Collapsible>
    </div>
  )
}

export default BlogNavBar
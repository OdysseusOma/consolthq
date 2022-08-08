import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Logo from '../../assets/ConsoltLogo.png'
import BlueButton from '../../components/blueButton'
import WhiteButton from '../../components/whiteButton';
import SearchBar from '../../components/searchBar';
import './blogNavBar.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import NewsLetter from '../../NewsLetter';
import SearchIcon from '@mui/icons-material/Search';

// Collapsable package
import { Collapsible } from 'collapsible-react-component'
import 'collapsible-react-component/dist/index.css'

import { useInView } from 'react-intersection-observer';

const BlogNavBar = () => {
  
    const [showCommunity, setShowCommunity] = useState(false)
    const [showCarousel, setShowCarousel] = useState(false)
    const [openSearch, setOpenSearch] = useState(false)
    const [openMenu, setOpenMenu] = useState(false)


  const carousel = () => {setShowCarousel((prev) => !prev)}
  const community = () => {setShowCommunity((prev) => !prev)}

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
      <div className={!stickyClass? "blogNav blogNavUnScrolled" : "blogNav blogNavScrolled"}>
        <nav style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', position: 'relative', backgroundColor: 'inherit'}}>
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
            {/* {showCarousel && (
            <div className="mobileBlogLinks" id='menuItem'>
            <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
            <a onClick={community}>Join our Community</a>
            </div> 
            )} */}

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
            <div style={{display: 'flex', position: 'relative', alignItems: 'center'}}>
                <div className='searchComponent'>
                    <SearchBar className='searcher'/>
                </div>
            </div>
            <div className='mobileSearchWrap'>
                <a onClick={() => {setOpenSearch(!openSearch)}}><SearchIcon /></a>
                <a className="carol" onClick={() => {setOpenMenu(!openMenu)}}>
                    {!openMenu? <MenuIcon /> : <CloseIcon />}
                </a>
            </div>
        </nav>
        <Collapsible open={openMenu}>
            <div className='mobileSearchDisplay'>
                <div className="mobileBlogLinks" id='menuItem'>
                <Link to="/" style={{ textDecoration: 'none', width: '100%'}}>Home</Link>
                <hr />
                <a onClick={community}>Join our Community</a>
                </div> 
            </div>
        </Collapsible>
        <Collapsible open={openSearch}>
            <div className='mobileSearchDisplay'>
                <SearchBar />
            </div>
        </Collapsible>
    </div>
  )
}

export default BlogNavBar
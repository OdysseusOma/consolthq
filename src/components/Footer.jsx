import React from 'react'
import { useEffect } from 'react'
import { Link } from "react-router-dom"
import './footer.css'
import FooterLogo from '../assets/footerLogo.png'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import EmailIcon from '@mui/icons-material/Email';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])
  return (
    <div id='footer' className='footerWrap'>
        <div className="socialMediaIcons">
            <p className="footerText">Connect With Us</p>
            <div className="iconWrapper">
                <div className="twitter blackIcon"><a href='https://www.google.com'><TwitterIcon /></a></div>
                <div className="instagram blackIcon"><a href='https://www.google.com'><InstagramIcon /></a></div>
                <div className="facebook blackIcon"><a href='https://www.google.com'><FacebookRoundedIcon /></a></div>
                <div className="email blackIcon"><a href='https://www.google.com'><EmailIcon /></a></div>
            </div>
        </div>
        <div className="footerLinks">
            <div className="footerLogoWrap">
                <Link to='/'>
                    <img src={FooterLogo} alt="" className="footerLogo" />
                </Link>
            </div>
            <div className="blogLink footerLinkText">
                <Link to='/blog'>
                    Blog    
                </Link>
            </div>
            <div className="termsOfUse footerLinkText">
                <Link to='/terms'>
                    Terms of Use
                </Link>
            </div>
            <div className="privacyPolicy footerLinkText">
                <Link to='/policy'>
                    Privacy policy
                </Link>
            </div>
        </div>
        <div className="footerCopyrightWrap">
            <div className="footerCopyright">
                <CopyrightIcon className='CopyrightIcon'/>Consolt Medical Technologies . All rights reserved
            </div> 
        </div>
        
    </div>
  )
}

export default Footer
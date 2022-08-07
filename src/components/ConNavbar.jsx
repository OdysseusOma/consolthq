import React from 'react'
import './connavbar.css'
import LOGO from '../assets/ConsoltLogo.png'
import { useState, useEffect } from 'react'

function Navbar() {

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
    <div className={!stickyClass? "navContainer" : "observed"}>
      <div className="navContainerPadding">
        <a className='navbar'>
          <div className="logo">
            <svg width="34" height="42" viewBox="0 0 34 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="21" r="12" fill="#63B8A7"/>
              <circle cx="22" cy="30" r="12" fill="#09427D"/>
              <circle cx="22" cy="12" r="12" fill="#09427D"/>
              <path d="M20.7891 24.6406C20.7161 25.0156 20.651 25.4219 20.5938 25.8594C19.5677 26.0677 18.6276 26.1719 17.7734 26.1719C17.013 26.1719 16.2786 26.0573 15.5703 25.8281C14.862 25.5938 14.2448 25.2344 13.7188 24.75C13.1979 24.2656 12.8177 23.6953 12.5781 23.0391C12.3385 22.3828 12.2188 21.6797 12.2188 20.9297C12.2188 20.1276 12.3516 19.3542 12.6172 18.6094C12.8828 17.8646 13.2839 17.2344 13.8203 16.7188C14.362 16.1979 15.013 15.8099 15.7734 15.5547C16.5391 15.2943 17.3385 15.1641 18.1719 15.1641C19.0677 15.1641 19.9609 15.2578 20.8516 15.4453C20.8568 15.7109 20.8854 16.1172 20.9375 16.6641C20.3594 16.487 19.8672 16.3698 19.4609 16.3125C19.0547 16.25 18.6693 16.2188 18.3047 16.2188C17.6849 16.2188 17.0911 16.3151 16.5234 16.5078C15.9557 16.6953 15.4531 16.9974 15.0156 17.4141C14.5781 17.8307 14.2422 18.3438 14.0078 18.9531C13.7786 19.5573 13.6641 20.1875 13.6641 20.8438C13.6641 21.4531 13.7552 22.0312 13.9375 22.5781C14.125 23.125 14.4089 23.5885 14.7891 23.9688C15.1745 24.3438 15.6302 24.6328 16.1562 24.8359C16.6823 25.0339 17.2734 25.1328 17.9297 25.1328C18.7578 25.1328 19.7109 24.9688 20.7891 24.6406Z" fill="#F3EAEA"/>
            </svg>
          </div>

          <div className="test">consolt</div>
        </a>

        <nav className="listMenu">
          <ul className="listicles">
            <li className="list">HOME</li>
            <li className="list">MENU</li>
            <li className="list">CONTACT US</li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
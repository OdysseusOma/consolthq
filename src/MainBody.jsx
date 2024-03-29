import React from 'react'
import './MainBody.css'
import Group10 from './assets/Group10.png'
import { Link } from "react-router-dom";
import BlueButton from './components/blueButton';
import { useInView } from 'react-intersection-observer';

const MainBody = (props) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
  });

  return (
    <header className='mainBody'>
        <div className="textDiv">
          <div className="textBig">
            <p className="bigText">
              Bringing Quality<p style={{color:'#124A87'}}>Healthcare</p> Closer to you.
            </p>
          </div>
          <div className="textSmall">
            Consolt is redefining healthcare experiences for everyone
          </div>
          <div className="button">
            <a href='#footer'><BlueButton name="Join our Community" /></a>
          </div>
        </div>
        <div className="imageDiv">
          <div className={inView? 'imageset': 'imagedefault'} ref={ref}>
            <img className='group10' src={Group10} alt="" />
          </div>
        </div>
    </header>
  )
}

export default MainBody
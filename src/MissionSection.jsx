import React from 'react'
import './mission.css'
import Group11 from './assets/Group11.png'
import Group8 from './assets/Group8.png'

const MissionSection = () => {
  return (
    <div className='mission'>
        <div className="missionText">
            <div className="textBorder">
                <h3 className='missionTextMid'>Our Mission</h3>
                <p className='missionTextSmall'>Provide timely, quality, accessible and affordable health care with ease.</p>
            </div>
            <div className='tethoscopeBox'>
                <img className='tethoscopeImg' src={Group8} alt="" />
            </div>
        </div>

        <div className="missionIcons">
            <div className='gridIcons'>
                <div className="gridImgPadding">
                    <img className='gridImg' src={Group11} alt="" />
                    <span className='gridImgText'>Improve access to Healthcare</span>
                </div>
                <div className="gridImgPadding">
                    <img className='gridImg' src={Group11} alt="" />
                    <span className='gridImgText'>Improve access to Healthcare</span>
                </div>
                <div className="gridImgPadding">
                    <img className='gridImg' src={Group11} alt="" />
                    <span className='gridImgText'>Improve access to Healthcare</span>
                </div>
                <div className="gridImgPadding">
                    <img className='gridImg' src={Group11} alt="" />
                    <span className='gridImgText'>Improve access to Healthcare</span>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default MissionSection
import React from 'react'
import './community.css'
import Pana from './assets/pana.png'
import BlueButton from './components/blueButton'
import NewsLetter from './NewsLetter'

const Community = () => {
  return (
    <>
      <div id='community' className="surveyWrapper">
        <div className="panaImg">
          <img className='pana' src={Pana} alt="" />
        </div>

        <div className="surveyTextBox">
          <p className='surveyText'>Are you a Healthcare Professional or Marketer? Kindly take this Survey</p>
          <div><BlueButton name="Take survey" /></div>
        </div>
      </div>
      <NewsLetter />
    </>
  )
}

export default Community
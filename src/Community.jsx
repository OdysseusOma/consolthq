import React from 'react'
import './community.css'
import Pana from './assets/pana.png'
import BlueButton from './components/blueButton'
import NewsletterForm from './components/NewsletterForm'
import NewsletterImg from './assets/Build a community.png'

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


      <div className="newsletterWrapper">
        <div className="newsletterTextBox">
          <p className="newsletterText">We’re a company leveraging on existing technologies to provide easy-to-use and easy-to-access services. We’re building a health community online, we’ll like you to join us today.</p>
          <div><NewsletterForm /></div>
        </div>

        <div className="newsletterImgWrap">
          <img src={NewsletterImg} alt="" className="newsletterImg" />
        </div>
      </div>
    </>
  )
}

export default Community
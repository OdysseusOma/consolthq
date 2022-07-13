import React from 'react'
import NewsletterForm from './components/NewsletterForm'
import NewsletterImg from './assets/Build a community.png'

const NewsLetter = () => {
  return (
    <div className="newsletterWrapper">
        <div className="newsletterTextBox">
          <p className="newsletterText">We’re a company leveraging on existing technologies to provide easy-to-use and easy-to-access services. We’re building a health community online, we’ll like you to join us today.</p>
          <div><NewsletterForm /></div>
        </div>

        <div className="newsletterImgWrap">
          <img src={NewsletterImg} alt="" className="newsletterImg" />
        </div>
    </div>
  )
}

export default NewsLetter
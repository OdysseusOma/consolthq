import React from 'react'
import NewsletterForm from './components/NewsletterForm'
import NewsletterImg from './assets/Build a community.png'
import './community.css'
import { useInView } from 'react-intersection-observer';

const NewsLetter = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.2,
  });
  return (
    <div className="newsletterWrapper">
      <div className={inView? "newsletterScrollDiv" : "newsletterScrollDivDefault"} ref={ref}>
        <div className="newsletterTextBox">
          <p className="newsletterText">We’re a company leveraging on existing technologies to provide easy-to-use and easy-to-access services. We’re building a health community online, we’ll like you to join us today.</p>
          <div><NewsletterForm /></div>
        </div>

        <div className="newsletterImgWrap">
          <img src={NewsletterImg} alt="" className="newsletterImg" />
        </div>
      </div>
    </div>
  )
}

export default NewsLetter
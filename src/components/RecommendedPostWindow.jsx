import React from 'react'
import './recommendedPostWindow.css'
import RecommendedPostImg from '../assets/Rectangle 57.png'

const RecommendedPostWindow = () => {
  return (
    <div className='recommendedPostWindowWrap'>
        <div className="recommendedPostImgWrap"><img src={RecommendedPostImg} alt="Recommended post image" className="recommededPostImg" /></div>
        <div className="recommendedPostInfo">
            <div className="recommendedPostTitle"><p>Consolt 1.1 is now live!</p></div>
            <div className="recommendedPostDate">November 6, 2022</div>
        </div>
    </div>
  )
}

export default RecommendedPostWindow
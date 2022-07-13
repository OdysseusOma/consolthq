import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import BlogNavBar from './BlogNavBar'
import Footer from '../../components/Footer'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import './blog.css'
import AuthorImg from '../../assets/Ellipse 1.png'
import RecommendedPostWindow from '../../components/RecommendedPostWindow';
import LatestPostWindow from '../../components/PostWindow';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import axios from 'axios';
import Loadingpng from '../../assets/loadingimage.png'


const Blog = () => {
  const [notes, getNotes] = useState('');
  const [loading, setLoading] = useState(false)

  useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

  useEffect(()=>{
  getQuote()
  window.scrollTo(0, 0)
  },[])

  const getQuote = async() => {
    await axios.get(`https://consoltserver.herokuapp.com/user/featured`)
    .then(res => {
      const featuredList = res.data
      getNotes(featuredList)
    })
    .catch(err => {
      console.log(err)
    })
  }




  return (
    <div className='blogPage'>

       {loading? (
        <div style={{height: '100vh', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <img src={Loadingpng} alt="" />
            <p>Have you drunk water today?</p>
            <p>Yes, I’m talking to YOU!</p>
        </div>):
        <div>
          <BlogNavBar />
          <div className="blogHeaderWrap">
            <div className="blogHeader"><h1>The Consoltant Blog</h1></div>
            <div className="blogHeaderIcons">
              <div className="twitter"><a href='https://www.google.com'><TwitterIcon /></a></div>
              <div className="instagram"><a href='https://www.google.com'><InstagramIcon /></a></div>
              <div className="facebook"><a href='https://www.google.com'><FacebookRoundedIcon /></a></div>
            </div>
          </div>
          <div className="blogArticleWindow">
            <div className="featuredPostWrap">
              <div className="featuredPostText">Featured Post</div>
              
              <Link to={`/blog/${notes._id}`}>
                <div className="featuredPostBox">
                  <div className="featuredPostImgWrap">
                    <img src={notes.imageURL} alt="Featured post image" className="FeaturedPostImg" />
                  </div>
    
    
                  <div className="featuredPostTopic"><h2>{notes.title}</h2></div>
                  <div className="featuredPostInfo">
                    <div className="featuredPostDate">{notes.post_date}</div>
                    <div className="featuredPostLength"><AccessTimeIcon style={{maxWidth:'20px'}}/>{notes.post_length} minute(s) read</div>
                  </div>
                  <div className="featuredPostSynopsis">{notes.article}...</div>
                  <div className="featuredPostProfile">
                    {/* add author image to file */}
                    <div className="featuredAuthorImg"><img src={AuthorImg} alt="Author image" className="AuthorImg" /></div>
                    <div className="featuredPostAuthorName">{notes.author_name}</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="recommendedPostWrap">
              <div className="recommendedPost">Recommended Posts</div>
              <div className="RecommendedPostWindowBox">
                <RecommendedPostWindow />
                <RecommendedPostWindow />
                <RecommendedPostWindow />
                <RecommendedPostWindow />
                <RecommendedPostWindow />
              </div>
            </div>
          </div>
    
    
          <div className="latestPostWrap">
            <div className="latestPostHeader">Latest Posts</div>
            <div className="latestPostWindowBox">
              <LatestPostWindow className='latestpostalign'/>
            </div>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems:'center', paddingBottom: '1rem'}}>
            <Link to={'/posts'}>
              <div style={{backgroundColor: 'royalblue', width: 'fit-content', padding: '0.5em', borderRadius: '1rem'}}>
                Show All
              </div>
            </Link>
          </div>
          <Footer />
        </div>
        }
    </div>
  )
}

export default Blog
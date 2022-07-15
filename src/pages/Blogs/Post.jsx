import React from 'react'
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'
import BlogNavBar from './BlogNavBar'
import AuthorImg from '../../assets/Ellipse 1.png'
import './post.css'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import RelatedPostWindow from '../../components/PostWindow' 
import Footer from '../../components/Footer';
import axios from 'axios';
import Loadingpng from '../../assets/loadingimage.png'
import BlueButton from '../../components/blueButton'

const Post = () => {
    let { id } = useParams();
    const [notes, getNotes] = useState('');
    const [loading, setLoading] = useState(false)



    useEffect(()=>{
        window.scrollTo(0, 0)
        getQuote()
    },[id])

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])

    const getQuote = async() => {
        axios.get(`https://consoltserver.herokuapp.com/user/` + id)
        .then(res => {
        console.log('data received')
        const myList = res.data
        getNotes(myList)
        setLoading(true)
        setTimeout(setLoading(false), 4000)
        
        })
        .catch(err => {
        console.log(err)
        })
    }

 
  return (
    <div>

        {loading? (<div style={{height: '100vh', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <img src={Loadingpng} alt="" />
            <p>Have you drunk water today?</p>
            <p>Yes, I’m talking to YOU!</p>
        </div>): 
        <div>
            <BlogNavBar className='blgNavBarPost'/>

            <div className='postHeader'>
                
                <div className="featuredPostTopic"><h2>{notes.title}</h2></div>
                <div className="postHeaderInfo">
                    <div className="postHeaderDate">{notes.post_date}</div>
                <div className="postHeaderLength"><AccessTimeIcon style={{maxWidth:'20px'}}/>{notes.post_length} minutes read</div>
                </div>
                <div className="postHeaderProfile">
                  <div className="postHeaderAuthorImg"><img src={AuthorImg} alt="Author image" className="AuthorImg" /></div>
                  <div className="postHeaderAuthorName">{notes.author_name}</div>
                </div>
            </div>
            <div className='postArticle'>
                <div className="postSocialMediaIcons">
                    <div className="twitter"><a href='https://www.google.com'><TwitterIcon /></a></div>
                    <div className="instagram"><a href='https://www.google.com'><InstagramIcon /></a></div>
                    <div className="facebook"><a href='https://www.google.com'><FacebookRoundedIcon /></a></div>
                </div>
                
                <div className="postArticleWrap">
                    <div className="postArticleImgWrap"><img src={notes.imageURL} alt="Post article image" className="postArticleImg" /></div>
                    <div className="postArticleText">{notes.article}</div>
                </div>
            
                <div className="postSocialMediaIcons">
                    <div className="twitter"><a href='https://www.google.com'><TwitterIcon /></a></div>
                    <div className="instagram"><a href='https://www.google.com'><InstagramIcon /></a></div>
                    <div className="facebook"><a href='https://www.google.com'><FacebookRoundedIcon /></a></div>
                </div>
                
            </div>
            <div className='backButton'>
                <Link to="/blog">
                    <BlueButton name="Go back" />
                </Link>
            </div>
            <div className="latestPostWrap">
                <div className="latestPostHeader">Latest Posts</div>
                <div className="latestPostWindowBox">
                    <RelatedPostWindow />
                </div>
          </div>
    
          <Footer />
        </div>
               
        }
    </div>
  )
}

export default Post
import React from 'react'
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import './postWindow.css'
import LatestPostImg from '../assets/Rectangle 31.png'
import AuthorImg from '../assets/Ellipse 1.png'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import jsonData from '../mock.json'
import axios from 'axios'
import { useState } from 'react';


const LatestPostWindow = () => {
  const [notes, getNotes] = useState('');
  const onClicker= () => {
    window.scrollTo(0, 0)
  }

  useEffect(()=>{
    getQuote()
    window.scrollTo(0, 0)
  },[])

  const getQuote = async() => {
    axios.get(`http://localhost:4000/user`)
    .then(res => {
      const myList = res.data
      getNotes(myList)
    })
    .catch(err => {
      console.log(err)
    })
  }



  return (
    <div className='mainlatestPostWindow'>
      {notes.length > 0 &&
      notes.reverse().slice(0, 6).map((notes) => (
        <Link to={`/blog/${notes._id}`} key={notes._id} onClick={onClicker}>
          <div className='latestPostWindow'> 
            <div className="latestPostImgWrap"><img src={notes.imageURL} alt="Latest post image" className="LatestPostImg" /></div>
            <div className="latestPostMarginWrap">
                <div className="latestPostTopic"><p>{notes.title.substring(0, 50)}</p></div>
                <div className="latestPostInfo">
                  <div className="latestPostDate">{notes.post_date}</div>
                  <div className="latestPostLength"><AccessTimeIcon style={{maxWidth:'20px'}}/>{notes.post_length} minutes read</div>
                </div>
                <div className="latestPostSynopsis">{notes.article.substring(0, 134) + " ..."}</div>
                <div className="latestPostProfile">
                  <div className="latestAuthorImg"><img src={AuthorImg} alt="Author image" className="AuthorImg" /></div>
                  <div className="latestPostAuthorName">{notes.author_name}</div>
                </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
    
  )
}

export default LatestPostWindow
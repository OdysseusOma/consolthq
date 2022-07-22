import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './components/postWindow.css'
import AuthorImg from './assets/Ellipse 1.png'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import axios from 'axios'
import Loadingpng from './assets/loadingimage.png'
import BlogNavBar from './pages/Blogs/BlogNavBar'
import Footer from './components/Footer'
import ReactPaginate from 'react-paginate';



const AllPost = () => {
  const [notes, getNotes] = useState([]);
  const [loading, setLoading] = useState(false)
  const [pageNumber, setPageNumber] = useState(0)

  
   useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])


  const onClicker= () => {
    window.scrollTo(0, 0)
  }

  useEffect(()=>{
    getQuote()
    window.scrollTo(0, 0)
  },[])

  const getQuote = async() => {
    axios.get(`https://consoltserver.herokuapp.com/user`)
    .then(res => {
      const myList = res.data
      getNotes(myList)
    })
    .catch(err => {
      console.log(err)
    })
  }

  const postPerPage = 3
  const postsDisplayed = pageNumber * postPerPage

  const currentDisplay = notes.slice(postsDisplayed, postsDisplayed + postPerPage).map((notes) => {
    return (
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
    )
  })

  const pageCount = Math.ceil(notes.length / postPerPage)
  const changePage = ({selected}) => {
    setPageNumber(selected)
  }
  



  return (
    <div style={{width: '100%'}}>
      {loading? (
        <div style={{height: '100vh', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <img src={Loadingpng} alt="" />
            <p>Have you drunk water today?</p>
            <p>Yes, I’m talking to YOU!</p>
        </div>):
        <div>
          <BlogNavBar />
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', padding: '2rem'}}>
            {currentDisplay}
          </div>
          <div className='paginationWrapper'>
            <div className='paginationBtnWrap'>
              <ReactPaginate 
                previousLabel={'Prev'}
                nextLabel={'Next'}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={'paginationBtn'}
                previousLinkClassName={'previousBtn'}
                nextLinkClassName={'nextBtn'}
                disabledClassName={'paginationDisabled'}
                activeClassName={'paginationActive'}
              />
            </div>
          </div>
          <Footer />
        </div>
      }
    </div>
  )
}

export default AllPost
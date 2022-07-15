import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import Blog from './pages/Blogs/blog';
import Community from './Community';
import Post from './pages/Blogs/Post';
import PrivacyPolicy from './components/PrivacyPolicy';
import Terms from './components/Terms';
import AllPost from './AllPost';
import Loadingpng from './assets/loadingimage.png'

const Main = () => {
  return (
    <div className='main'>
        <Routes>
            <Route exact path="/" element={<App />} />
            <Route path="community" element={<Community />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:id" element={<Post />} />
            <Route path="policy" element={<PrivacyPolicy />} />
            <Route path="terms" element={<Terms />} />
            <Route path="posts" element={<AllPost />} />
            <Route path='*' 
            element={
                <main style={{display: 'flex', height: '100vh', width: '100vw', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem'}}>
                <img src={Loadingpng} alt="" />
                <p>Opps... Something's wrong</p>
                <h3>Try again Later</h3>
                </main>
            }/>
        </Routes>
    </div>
  )
}

export default Main
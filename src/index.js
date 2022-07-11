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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="community" element={<Community />} />
      <Route path="blog" element={<Blog />} />
      <Route path="blog/:id" element={<Post />} />
      <Route path="policy" element={<PrivacyPolicy />} />
      <Route path="terms" element={<Terms />} />
      <Route path="posts" element={<AllPost />} />
      {/* <Route path='*' 
      element={
        <main>
          <p>There's nothing here</p>
        </main>
      }/> */}
    </Routes>
  </BrowserRouter>
);

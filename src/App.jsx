import React, { useEffect } from 'react';
import './App.css';
import Navbar from './Navbar';
import MainBody from './MainBody';
import MissionSection from './MissionSection';
import Community from './Community'
import Footer from './components/Footer';



function App() {
  useEffect(()=>{
  window.scrollTo(0, 0)
  },[])
  return (
      <div className="App">
        <Navbar />
        <MainBody />
        <MissionSection />
        <Community />
        <Footer />
      </div>
  );
}

export default App;

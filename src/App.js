import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import FALA from "./components/FALA";
import OurImpact from "./components/Ourimpact";
import Media from "./components/Media";
import Blog from "./components/Blog";



function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/fala" element={<FALA />} />
      <Route path="/our-impact" element={<OurImpact />} />
      <Route path="/media" element={<Media />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
    <Footer/>
  </Router>
  );
}

export default App;

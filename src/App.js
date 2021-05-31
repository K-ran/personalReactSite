import './App.css';
import React from 'react';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import MainContent from './components/main_content/MainContent';
import Hero from './components/hero/Hero';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Hero/>
      <MainContent/>
      <Footer/>
    </div>
  );
}

export default App;

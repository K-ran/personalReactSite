import './App.css';
import React from 'react';
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import MainContent from './components/main_content/MainContent'

function App() {
  return (
    <div>
      <Navbar/>
      <MainContent/>
      <Footer/>
    </div>
  );
}

export default App;

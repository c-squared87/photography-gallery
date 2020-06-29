import React from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import MainPage from './components/MainPage'
import AboutPage from './components/AboutPage'
import GalleryPage from './components/GalleryPage'
import PrintsPage from './components/PrintsPage'
import ContactPage from './components/ContactPage'

function App() {
  return (
    <div className="App">
      <Header />
      <PrintsPage />
      <Footer />
    </div>
  );
}

export default App;

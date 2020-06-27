import React from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import MainPage from './components/MainPage'
import AboutPage from './components/AboutPage'

function App() {
  return (
    <div className="App">
      <Header />
      {/* <MainPage /> */}
      <AboutPage/>
      <Footer />
    </div>
  );
}

export default App;

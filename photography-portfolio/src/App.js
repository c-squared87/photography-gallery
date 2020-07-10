import React from 'react';
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import MainPage from './components/MainPage'


function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}


const IntroPage = () => {
  return (
    <MainPage />
  )
}

const DefaultPage = () => {
  return (
    <Header />
  )
}

export default App;

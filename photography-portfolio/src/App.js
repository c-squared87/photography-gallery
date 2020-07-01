import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import MainPage from './components/MainPage'


function App() {
  return (
    <div className="App">
      <Header />
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

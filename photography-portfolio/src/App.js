import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
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
    <BrowserRouter>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/gallery" component={GalleryPage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/contact' component={ContactPage} />
        </Switch>
      </div>

    </BrowserRouter>
  );
}

export default App;


// <li><Link to="/">Home</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/contact">Contact</Link></li>

// <Route
//         path="/events"
//         render={props => {
//           return <Events />;
//         }}
//       />
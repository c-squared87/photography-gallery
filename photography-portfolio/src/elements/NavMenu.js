import React from 'react'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import '../App.css';

import MainPage from '../components/MainPage'
import AboutPage from '../components/AboutPage'
import GalleryPage from '../components/GalleryPage'
import PrintsPage from '../components/PrintsPage'
import ContactPage from '../components/ContactPage'

const NavMenu = () => {
    return (
        <Router>
            <nav>
                <ul>
                    {/* <li><Link to="/">Home</Link></li> */}
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/prints">Prints</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <Switch>
                <Route path="/" exact component={MainPage} />
                <Route path="/gallery" component={GalleryPage} />
                <Route path='/about' component={AboutPage} />
                <Route path='/contact' component={ContactPage} />
                <Route path='/prints' component={PrintsPage} />
            </Switch>
        </Router>
    )
}

export default NavMenu
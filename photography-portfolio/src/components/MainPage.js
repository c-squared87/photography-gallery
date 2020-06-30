import React from "react"
import '../App.css'
import { Link } from 'react-router-dom'

function MainPage() {
    return (
        <div className="main-page">
            <div className="main-title">
                <div className="main-title-tag"><h2 className="">The Photography Of</h2></div>
                <div className="main-title-name"><h1 className="">Craig Carlson</h1></div>
            </div>
            <div className="main-page-menu">
                <ul>
                    <li className="italic">About</li>
                    <li className="italic">Galleries</li>
                    <li className="italic">Prints</li>
                    <li className="italic">Contact</li>
                </ul>
            </div>
            <Link to="/about"><button className="main-load-button">\/</button></Link>
        </div>
    )
}

export default MainPage
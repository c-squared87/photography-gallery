import React from "react"
import '../App.css'

function MainPage(){
    return(
        <div className="main-page">
            <div className="main-title-tag">The Photography Of</div>
            <div className="main-title-name">Craig Carlson</div>
            <div className="main-page-menu">
                <ul>
                    <li>About</li>
                    <li>Galleries</li>
                    <li>Prints</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default MainPage
import React from 'react'
import "../App.css"

function Header(){
    return(
        <div className="header">
            <div className="header-title">
                <div className="header-title-tag">The Photography of</div>
                <div className="header-title-name">Craig Carlson</div>
            </div>
            <ul>
                <li>About</li>
                <li>Gallery</li>
                <li>Prints</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Header
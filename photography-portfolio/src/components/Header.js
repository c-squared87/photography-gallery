import React from 'react'
import "../App.css"
import NavMenu from '../elements/NavMenu'

function Header() {
    return (
        <div className="header">
            <div className="header-title">
                <div className="header-title-tag">The Photography of</div>
                <div className="header-title-name">Craig Carlson</div>
            </div>
            <NavMenu />
        </div>
    )
}

export default Header
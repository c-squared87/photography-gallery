import React from 'react'
import "../App.css"

// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
// import PerformanceGallery from '../elements/PerformanceGallery'
// import TravelGallery from '../elements/TravelGallery'

import ImageQueue from '../elements/ImageQueue'

function GalleryPage() {
    return (
        <div className="gallery-page">
            <div className="gallery-header" style={{ backgroundImage: "url(" + ")" }}>
                <div className="gallery-nav grid">
                    <h1 className="bold">Gallery</h1>
                    <ul>
                        <li className="italic">Performance</li>
                        <li className="italic">Travel</li>
                        <li className="italic">Editorial</li>
                    </ul>
                </div>
            </div>
            <div className="gallery-gallery grid">
                <div className="gallery-active-image">
                    <p>caption</p>
                </div>
                <ImageQueue />
            </div>
        </div>
    )
}

export default GalleryPage
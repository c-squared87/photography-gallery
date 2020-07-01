import React from 'react'
import "../App.css"
import ImageQueue from '../elements/ImageQueue'

function GalleryPage() {
    return (
        <div className="gallery-page">
            <div className="gallery-header">
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
                <ImageQueue title='Travel' />
            </div>
        </div>
    )
}

export default GalleryPage
import React from 'react'
import "../App.css"

function GalleryPage() {
    return (
        <div className="gallery-page">
            <div className="gallery-header">
                {/* add grid to this for bigger sizes? */}
                <div className="gallery-nav grid">
                    <h1>Gallery</h1>
                    <ul>
                        <li>Performance</li>
                        <li>Travel</li>
                        <li>Editorial</li>
                    </ul>
                </div>
            </div>

            <div className="gallery-gallery grid">
                <div className="gallery-active-image">
                    <p>caption</p>
                </div>
                <div className="gallery-image-queue grid">
                    <div className="queue-title">Performance</div>
                    <div className="queue-image">IMG 1</div>
                    <div className="queue-image">IMG 2</div>
                    <div className="queue-image">IMG 3</div>
                    <div className="queue-image">IMG 4</div>
                    <div className="queue-image">IMG 5</div>
                    <div className="queue-image">IMG 6</div>
                </div>
            </div>
        </div>
    )
}

export default GalleryPage
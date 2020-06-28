import React from 'react'
import "../App.css"

function GalleryPage(){
    return(
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
                    <ul className="">
                        <li className="queue-image">img_1</li>
                        <li className="queue-image">img_2</li>
                        <li className="queue-image">img_3</li>
                        <li className="queue-image">img_4</li>
                        <li className="queue-image">img_5</li>
                        <li className="queue-image">img_6</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default GalleryPage
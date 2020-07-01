import React from 'react'
import '../App.css'
import GalleryImage from './GalleryImage'
import img_1 from '../images/travel/ams1.png'
import img_2 from '../images/travel/ams2.png'
import img_3 from '../images/travel/ams3.png'
import img_4 from '../images/travel/ams4.png'

const ImageQueue = (props) => {
    return (
        <div className="gallery-image-queue grid">
            <div className="queue-title">{props.title}</div>
            <GalleryImage image={img_1} />
            <GalleryImage image={img_2} />
            <GalleryImage image={img_3} />
            <GalleryImage image={img_4} />
        </div>
    )
}

export default ImageQueue
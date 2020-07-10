import React from 'react'
import '../App.css'
import GalleryImage from './GalleryImage'
import img_1 from '../images/travel/ams1.png'
import img_2 from '../images/travel/ams2.png'
import img_3 from '../images/travel/ams3.png'
import img_4 from '../images/travel/ams4.png'
import img_5 from '../images/travel/amsmax2.png'
import img_6 from '../images/travel/T81A4015.jpg'
import img_7 from '../images/travel/T81A4681.jpg'
import img_8 from '../images/travel/T81A5023.jpg'
import img_10 from '../images/travel/T81A5671.jpg'
import img_11 from '../images/travel/T81A5680.jpg'









const TravelGallery = (props) => {
    return (
        <div className="gallery-image-queue grid">
            <div className="queue-title"><h1>Travel</h1></div>
            <GalleryImage image={img_1} />
            <GalleryImage image={img_2} />
            <GalleryImage image={img_3} />
            <GalleryImage image={img_4} />
            <GalleryImage image={img_5} />
            <GalleryImage image={img_6} />
            <GalleryImage image={img_7} />
            <GalleryImage image={img_8} />
            <GalleryImage image={img_10} />
            <GalleryImage image={img_11} />
        </div>
    )
}

export default TravelGallery
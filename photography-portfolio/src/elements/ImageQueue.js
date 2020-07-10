import React from 'react'
import '../App.css'
import GalleryImage from './GalleryImage'


// import img_1 from '../images/travel/ams1.png'

import imageHolder from '../components/ImageHolder'

const ImageQueue = (props) => {

    const travelGallery = imageHolder.map(function (image) {
        return <GalleryImage key={image.id} image={image.image} />
    })

    return (
        <div className="gallery-image-queue grid">
            <div className="queue-title"><h1>TESTING</h1></div>

            {/* <GalleryImage image={img_1} caption='testing' /> */}
            {/* <GalleryImage image={travelGallery[0].image} caption='yeah fuck' /> */}
            {travelGallery}
            {/* <img src={img_1} alt="fuick"></img> */}
        </div>
    )
}

export default ImageQueue
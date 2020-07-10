import React from 'react'
import '../App.css'
import GalleryImage from './GalleryImage'

import p1 from '../images/perf/T81A0835.jpg';
import p2 from '../images/perf/T81A1844.jpg'
import p3 from '../images/perf/T81A2191.jpg'
import p4 from '../images/perf/T81A2715.jpg'
import p5 from '../images/perf/T81A3588.jpg'
import p6 from '../images/perf/T81A6179.jpg'
import p7 from '../images/perf/T81A7093.jpg'
import p8 from '../images/perf/T81A7370.jpg'
import p9 from '../images/perf/T81A8639.jpg'
import p10 from '../images/perf/T81A9956.jpg'


const PerformanceGallery = (props) => {
    return (
        <div className="gallery-image-queue grid">
            <div className="queue-title"><h1>Performance</h1></div>
            <GalleryImage image={p1} caption='In studio' />
            <GalleryImage image={p2} caption='backstage' />
            <GalleryImage image={p3} />
            <GalleryImage image={p4} />
            <GalleryImage image={p5} />
            <GalleryImage image={p6} />
            <GalleryImage image={p7} />
            <GalleryImage image={p8} />
            <GalleryImage image={p9} />
            <GalleryImage image={p10} />
        </div>
    )
}

export default PerformanceGallery
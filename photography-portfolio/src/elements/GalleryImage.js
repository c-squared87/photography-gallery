import React from 'react'
import '../App.css'

function GalleryImage(props) {
    var _string = "url(" + props.image + ")"
    console.log(_string)
    return (
        <div className="queue-image" style={{}}>
            <p>{props.caption}</p>
            <img src={'/public/images/perf/T81A3588.jpg'} alt={_string}></img>
        </div >
    )
}

export default GalleryImage 
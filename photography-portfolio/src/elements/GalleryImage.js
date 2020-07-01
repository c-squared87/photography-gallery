import React from 'react'
import '../App.css'

class GalleryImage extends React.Component {


    render() {
        var _string = "url(" + this.props.image + ")"
        return <div className="queue-image" style={{ backgroundImage: _string }}> </div>
    }
}

export default GalleryImage 
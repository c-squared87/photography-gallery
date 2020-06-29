import React from 'react'
import '../App.css'

const PrintCard = (props) => {
    return (<div className="print-card ">
        <div className="print-card-image"></div>
        <div className="print-card-options">
            <h2>{props.title}</h2>
            <p>{props.details}</p>
            <label for="options">Print Options</label>
            <select id="options" className="print-options">
                <option value="1">16" x 20" - $20</option>
                <option value="2">20" x 24" - $24</option>
                <option value="3">6" x 10" - $10</option>
            </select>
            <button>Place Order</button>
        </div>
    </div>)
}

export default PrintCard
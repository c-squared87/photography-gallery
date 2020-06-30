import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

function AboutPage() {
    return (
        <div className="about-page grid">
            <h1 className="bold">About</h1>
            <div className="about-page-image">this needs to be on a grid</div>
            <p>Tenetur autem consectetur est aut cumque ad. Quisquam pariatur excepturi ut dolorum quia. Eius ut sequi quod aut.
            Nisi placeat id error aut consectetur minima qui. Nemo voluptates ipsum dolores consequuntur rerum cum. Consectetur odio aut adipisci qui unde soluta ea amet.
            </p>
            <Link to="/gallery"> <button className="">View My Work</button></Link>
            <Link to="/contact"><button className="">Get In Touch</button></Link>
        </div>
    )
}

export default AboutPage
import React from 'react'

function ContactPage() {
    return (
        <div className="contact-page grid">

            <h1>Contact Me</h1>
            <p>lorem asdf g  asijasdf   gh gfaspdiufas dasfjasd jdsfa jasdf ghoiawfr viweb cdia</p>

            <div className="contact-form">
                <form>
                    <div className="contact-name">
                        <input type="text" id="name" placeholder="Your Name"></input>
                    </div>
                    <div className="contact-email">
                        <input type="email" placeholder="Your Email"></input>
                    </div>
                    <div className="contact-message" >
                        <textarea rows="4" placeholder="Say Hello!"></textarea>
                    </div>
                    <button>Submit</button>
                </form>
            </div>

        </div>
    )
}

export default ContactPage
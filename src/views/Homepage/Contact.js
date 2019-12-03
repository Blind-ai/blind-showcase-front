import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div>
            <h1><center>Contact us !</center></h1>
            <div id="redcontainer">
                <div id="infocontainer">
                    <input placeholder="Object"/>
                    <input placeholder="Email"/>
                </div>
               <textarea id="messageinput" placeholder="Your message" />

            </div>

        </div>
    )
}

export default Contact;
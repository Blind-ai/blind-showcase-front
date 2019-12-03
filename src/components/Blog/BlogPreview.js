import React from 'react'
import './BlogPreview.css'

const photo = require('../../assets/irm.jpg');
const photo2 = require('../../assets/hidethepainharold.jpg');

function BlogPreview(props) {
    return (
            <div id='blog-preview-container'>
                <img  src={props.photo === '1' ? photo : photo2}/>
                <div id="divider"> </div>
                <div id="text-container">
                    <a>{props.title}</a>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                </div>
            </div>
    )
}

export default BlogPreview;
import React from 'react'
import './NewsCompoment.css'
const img = require('../../assets/hidethepainharold.jpg');

function NewsComponent(props) {
    return (
        <div style={{'backgroundColor': '#c52500', position: 'relative'}}>
            <img id='image' src={img} />
            <div style={{ top: '30% ', left: '0', position: 'absolute', 'backgroundColor': '#c52500', width: '50%', height: '50%', padding: '5px'}}>
                <p id="text">{props.text}</p>
            </div>

        </div>

    )
}

export default NewsComponent;
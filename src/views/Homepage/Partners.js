import React from 'react';
import './Partners.css'
import facebooklogo from '../../assets/facebook.png'
import saplogo from '../../assets/sap.png'
import thefamilylogo from '../../assets/thefamily.png'
import vivatechlogo from '../../assets/vivatech.png'


function Partners() {
    return (
        <div id="partnerscontainer">
            <h1><center>Our partners</center></h1>
            <div id="imagescontainer">
                <img src={facebooklogo}  alt="facebook"/>
                <img src={saplogo} alt="sap"/>
                <img src={thefamilylogo} alt="thefamily"/>
                <img src={vivatechlogo} alt="vivatech" />
            </div>

        </div>

    )
}

export default Partners;
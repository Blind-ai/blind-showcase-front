import React from 'react'
import './HomeSlide.css'
const img = require('../../assets/menu.jpg');


class HomeSlide extends React.Component {

    showText() {
        return (
            <div className="textContainer">
                <b>L'intelligence artificielle, le futur</b>
                <p className="secondText" >que nous avons décidé de créer</p>
            </div>
        )
    }

    render() {
        return (
            <div>
                <div>
                <img src={img}/>
                </div>
                {this.showText()}
                <div className="buttonContainer">
                    <a>Découvrir ></a>
                </div>
            </div>
        );
    }
}

export default HomeSlide;
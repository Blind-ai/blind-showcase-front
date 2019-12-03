import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Home.css';  // change this to the file path of your overrides
import { Carousel } from 'react-responsive-carousel';
import HomeMenu from "../../components/Home/HomeMenu";
import HomeSlide from '../../components/Home/HomeSlide'

const img = require('../../assets/background-image-3507320_960_720.jpg');


function Home() {
        return (
            <div >
                <Carousel showStatus={false} dynamicHeight={false} showThumbs={false}>
                    <HomeSlide/>
                    <div>
                        <img src={img} />
                    </div>
                    <div>
                        <img src="../../assets/background-image-3507320_960_720.jpg" />
                        <p className="legend">Legend 3</p>
                    </div>
                </Carousel>

            </div>
        );
}

export default Home;
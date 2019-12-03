import React, {useEffect} from 'react'
import Home from "./Home";
import Trial from "./Trial";
import Solutions from "./Solutions";
import News from "./News";
import Team from "./Team";
import Partners from "./Partners";
import Contact from "./Contact";
import { withRouter } from "react-router-dom";
import HomeMenu from "../../components/Home/HomeMenu";


function Homepage() {

    useEffect(() => {
        document.title = "Blind AI"
    }, []);


    return (
        <div>
            <Home/>
            <Trial/>
            <Solutions/>
            <News/>
            <Team/>
            <Partners/>
            <Contact/>
            <HomeMenu/>

        </div>
    )
}

export default Homepage;
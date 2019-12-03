import React from 'react';
import './Menu.css'
import logo from "../../assets/blind.svg";
import Home from "../../views/Homepage/Home";
import TeamDetails from "../../views/TeamDetails/TeamDetails";
import { withRouter } from "react-router-dom";


function Menu() {
    return (

        <div id="menu-container">
            <img src={logo} id="logo"/>

            <div id="menuroutes">
                <a href="/" >accueil</a>
                <a href="/team" >equipe</a>
                <a href="/blog" >blog</a>
                <a href="/contact" >contact</a>

            </div>


        </div>

    )

}


export default Menu;
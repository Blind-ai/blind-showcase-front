import React from 'react'
import './HomeMenu.css'
import logo from '../../assets/blind.svg'

function HomeMenu() {
    return (
       <div className="container">
           <img src={logo} id="logo"/>

           <div className="redirectionMenu">
               <a href="/" >accueil</a>
               <a href="/team" >equipe</a>
               <a href="/contact" >blog</a>
               <a href="/contact" >contact</a>
           </div>
       </div>
    );
}

export default HomeMenu;
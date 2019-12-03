import React from 'react'
import './Trial.css'

function Trial() {
    return (
        <div className="text-center margin">
            <h1>Des IA visionnaires.<br/>Créées pour vous.</h1>
            <p>Nous pensons que l'intelligence artificielle va radicalement changer la façon dont nous travaillons, investissons, et permettra de sauver des vies. <b   >Blind</b> vous offre de nombreux services personnalisés au travers de solutions basées sur l'intelligence artificielle. Nous vous mettons à disposition une plateforme web pour tester en temps réel nos produits. Vous avez ainsi une parfaite visibilité sur la qualité des services que nous nous efforçons de créer.
            </p>
            <div className="centered">
                <div id="trial-button">
                    <a href="/#">Demander un essai</a>
                </div>
            </div>
        </div>
    );
}

export default Trial;
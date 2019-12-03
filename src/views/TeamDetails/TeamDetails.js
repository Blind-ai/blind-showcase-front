import React, {useEffect} from 'react';
import RoundMemberImage from "../../components/Team/RoundMemberImage";
import './TeamDetails.css'
import { withRouter } from "react-router-dom";


const team = {
    flavian: {
        name: 'Flavian Gontier',
        job: 'Chef de Projet',
        photo
            :
            require('../../assets/flavian.jpeg')}
    ,
    lucas:
        {
            name: 'Lucas Clérisse',
            job
                :
                'Développeur IA',
            photo
                :
                require('../../assets/lucas2.jpg')
        }
    ,
    fabien:
        {
            name: 'Fabien Labarbe',
            job
                :
                'Développeur Software',
            photo
                :
                require('../../assets/fabien2.jpg')
        }
    ,
    hadrien: {
        name: 'Hadrien Mortier',
        job
            :
            'Manager',
        photo
            :
            require('../../assets/hadrien.jpeg')
    }
    ,
    yoann:
        {
            name: 'Yoann Kersulec',
            job
                :
                'Communication',
            photo
                :
                require('../../assets/yoann.jpeg')
        }
    ,
    nathan:
        {
            name: 'Nathan Lebon',
            job
                :
                'Développeur Mobile',
            photo
                :
                require('../../assets/nathan.jpeg')
        }
    ,
    erwan:
        {
            name: 'Erwan Bernard',
            job
                :
                'Développeur Backend',
            photo
                :
                require('../../assets/erwan.jpg')
        }
    ,
};
 //TODO remove duplicqte

function TeamDetails() {
    useEffect(() => {
        document.title = "Equipe"
    }, []);

    return(
        <div>
        <div>
            <div id="team-title-container">
            <h1>This is our team</h1>
            <h2>Blind est un projet né d'une équipe d'étudiants d'Epitech Paris.</h2>
            </div>
            <div>
                <div className={"photoscontainer"}>
                <RoundMemberImage member={team.erwan}/>
                <RoundMemberImage member={team.fabien}/>
                </div>

                <div className={"photoscontainer"}>
                <RoundMemberImage member={team.flavian}/>
                <RoundMemberImage member={team.hadrien}/>
                <RoundMemberImage member={team.lucas}/>
                </div>

                <div className={"photoscontainer"}>
                <RoundMemberImage member={team.nathan}/>
                <RoundMemberImage member={team.yoann}/>
                </div>
            </div>
        </div>
        </div>
    )
}

export default TeamDetails;
import React from 'react'
import './Team.css'
import Member from "../../components/Team/Member";


const team = [
    {
        name: 'Flavian Gontier',
        job: 'Chef de Projet',
        photo: require('../../assets/flavian.jpeg')
    },
    {
        name: 'Lucas Clérisse',
        job: 'Développeur IA',
        photo: require('../../assets/lucas2.jpg')
    },
    {
        name: 'Fabien Labarbe',
        job: 'Développeur Software',
        photo: require('../../assets/fabien2.jpg')
    },
    {
        name: 'Hadrien Mortier',
        job: 'Manager',
        photo: require('../../assets/hadrien.jpeg')
    },
    {
        name: 'Yoann Kersulec',
        job: 'Communication',
        photo: require('../../assets/yoann.jpeg')
    },
    {
        name: 'Nathan Lebon',
        job: 'Développeur Mobile',
        photo: require('../../assets/nathan.jpeg')
    },
    {
        name: 'Erwan Bernard',
        job: 'Développeur Backend',
        photo: require('../../assets/erwan.jpg')
    },
];

class Team extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        const teamMembers = team.map((item, key) =>
            <Member photo={item.photo} name={item.name} job={item.job} key={key}/>
        );
        return (
            <div style={{marginTop: '100px', marginBottom: '50px'}}>
                <h1>
                    <center>The Team</center>
                </h1>
                <div className='teamContainer'>
                    {teamMembers}
                </div>
                <div className="centered">
                    <a href="/team" className='seeTeamButton'> > See our team</a>
                </div>
            </div>
        )
    }
}

export default Team;
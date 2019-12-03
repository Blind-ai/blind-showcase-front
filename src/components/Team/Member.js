import React from 'react'
import './Member.css'

class Member extends React.Component{

    constructor(props) {
        super(props);

    }

    render() {


        return (

            <div style={{display: 'flex', 'flexDirection': 'row', 'padding': '10px'}}>
                <img id="memberImage" src={this.props.photo}/>
                <div id="infoContainer">
                    <a id="nameText">{this.props.name}</a>
                    <a id="jobText">{this.props.job}</a>
                </div>

            </div>

        )
    }

}

export default Member
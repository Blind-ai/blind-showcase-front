import React from 'react'
import Popover from "react-tiny-popover";
import './RoudMemberImage.css'
const photo = require('../../assets/fabien2.jpg');


class RoundMemberImage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isPopoverOpen: false}
    }

    render() {



        return (
            <Popover isOpen={this.state.isPopoverOpen}
                     position={'top'} // preferred position
                     content={(
                         <div className={"popovercontainer"} >
                             <h2>{this.props.member.name}</h2>
                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                         </div>
                     )}
            >
            <img className={"roundimage"}  src={this.props.member.photo} onMouseOver={() => this.setState({ isPopoverOpen: true })} onMouseLeave={() => this.setState({ isPopoverOpen: false })}/>
            </Popover>

        )
    }
}

export default RoundMemberImage;
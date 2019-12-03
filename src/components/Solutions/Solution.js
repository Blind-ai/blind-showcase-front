import React from 'react';
import './Solution.css';

class Solution extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="container" onClick={() => this.props.onClick(this.props.text)}>
                <a id={this.props.activated ? 'activatedTextStyle' : 'iddleTextStyle' }>{this.props.text}</a>
                <div onClick={this.test} className={this.props.activated ? 'arrow-down' : 'arrow-down-hidden'} />
            </div>
        )
    }


}

export default Solution;
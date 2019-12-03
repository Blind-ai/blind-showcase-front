import React from 'react';
import './Solutions.css';
import Solution from "../../components/Solutions/Solution";

const items = [
    {
        name: 'Health',
        isActivated: true,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        name: 'Technology',
        isActivated: false,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        name: 'Medical',
        isActivated: false,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        name: 'Industry',
        isActivated: false,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

    }
]


class Solutions extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            items: items
        };

        this.onPressCallback = this.onPressCallback.bind(this)
    }

     onPressCallback(newSelectedItem) {
        console.log(this.state.items)
        const newItems = this.state.items;
        for (let index = 0; index < newItems.length; index++) {
            newItems[index].isActivated = newItems[index].name === newSelectedItem;
        }
        this.setState({
            items: newItems
        })
    }

     renderMenuItem(item, key) {
        const name = item.name;
        const isActivated = item.isActivated;
        return <Solution key={key} text={name} activated={isActivated} onClick={this.onPressCallback}/>
    }

     render() {
        return (
        <div id="solutionscontainer">
            <h1><center>Our areas of solutions</center></h1>
            <div id="nonamecontainer">
                <div id="menucontainer">

                    {this.state.items.map((item, key) => (
                        this.renderMenuItem(item, key)
                    ))}

                </div>
                <div id='textcontainer'>
                    <p id="solutionsText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
        )
    }


}

export default Solutions;
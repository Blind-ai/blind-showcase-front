import React from 'react';
import './App.css';
import TeamDetails from "./views/TeamDetails/TeamDetails";
import Menu from "./components/Menu/Menu";
import { BrowserRouter, Route} from 'react-router-dom'
import Homepage from "./views/Homepage/Homepage";
import Blog from "./views/Blog/Blog";


class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            isHomepage: true,
        }
    }

    componentDidMount() {
        document.title = "Blind AI"
    }


    render() {
        const menu = window.location.pathname === '/' ? null : <Menu/>;

        return (
            <div>
                <BrowserRouter>
                    {menu}
                    <Route exact path="/" location={this.props.location} component={Homepage}/>
                    <Route path="/team"  location={this.props.location} component={TeamDetails}/>
                    <Route path="/blog" location={this.props.location} component={Blog} />
                </BrowserRouter>
            </div>

            /**

             **/

        );
    }
}

export default App;

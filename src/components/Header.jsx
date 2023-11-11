import React, { Component } from 'react';
import Navigator from './Navigator';

class Header extends Component {

    

    render() {
        
        const {location} = this.props;

        console.log("----------> Location",location);

        return (
            <header>
                <Navigator location={location}/>
                <div>
                    <p>Lotery advisor</p>
                </div>
            </header>
        );
    }
}

export default Header;
import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navigator extends Component {


  render() {


    const {location} = this.props;
    console.log("paso1");

    return (
      <div>
        <nav className='navigation'>
          <ul>
            <li><Link to="/" className={location.pathname==="/"?'active':''}>Home</Link></li>
            <li><Link to="/historic" className={location.pathname==="/historic"?'active':''}>Historic</Link></li>
            <li style={{float:"right"}}><Link to="/about" className={location.pathname==="/about"?'active':''}>About</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigator;
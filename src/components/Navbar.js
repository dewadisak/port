import react from "react";
import React, { Component } from "react";
import {Link} from 'react-router-dom';
class Navbar extends Component {
  render() {
    return (

      <div className="header">
        <div className="container">
          <div className="header-con">
            <div className="logo-container">
              <a  > Portfolio</a>

            </div>
            <ul className="menu">
              <li className="menu-link">
                <Link to="/" className="menu">Home</Link>
              </li>
              <li className="menu-link">
                <Link to="/api" className="menu">API</Link>
              </li>
              <li className="menu-link">
                <Link to="/contact" className="menu-item-contact">Contact</Link>
              </li>

            </ul>
            
          </div>
         

        </div>
 
      </div>
    );
  }
}

export default Navbar;

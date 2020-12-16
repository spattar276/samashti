import React, { Component } from 'react';
import FullpageContext from '@ap.cx/react-fullpage';
import mainLogo from '../images/samastilogo.png';
import {
  Link
} from "react-router-dom";
export default class Menu extends Component {
  render() {
    return (
      <nav>
        <div className="header">
          <div className="logo">
            <img className="logo-img" src={mainLogo} alt="samasti" />
          </div>
          <div className="navigation">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/ourwork">Our Work</Link>
              </li>
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/collaborators">Collaborators</Link>
              </li>
              <li>
                <Link to="/contactus">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}


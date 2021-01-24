import React, { Component } from 'react';
import "../styles/menu.scss";
import {
  Link
} from "react-router-dom";
export default class Menu extends Component {
  render() {
    return (
      <footer>
        <nav>    
          <div className="header">         
            <div className="navigation">
              <ul>
              <li>
                  <Link to="/">Home</Link>
                </li>
              <li>
                  <Link to="/aboutus">About Us</Link>
                </li>
                <li>
                  <Link to="/ourwork">Our Work</Link>
                </li>
                <li>
                  <Link to="/collaborators">Collaborators</Link>
                </li>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
                <li>
                  <Link to="/contactus">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </footer> 
    )
  }
}
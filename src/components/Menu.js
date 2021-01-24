import React, { Component } from 'react';
import mainLogo from '../images/samastilogo.png';
import hamburger from '../images/icons/hamburger1.svg';
import "../styles/menu.scss";
import {
  Link
} from "react-router-dom";
export default class Menu extends Component {
  render() {
    return (
      <header>
        <section className="fixedheader-wrapper">
          <div className="fixedheader">
            <div className="logo">
              <a href="/">
                <img className="logo-img" src={mainLogo} alt="samasti" />
              </a>  
            </div>
            <div className="h-11">
              <a href="/" className="a-button">Donate</a> 
            </div>
            <div className="h-12">
              <span className="hamburger">
                <img src={hamburger} alt="menu" />
              </span> 
            </div>
         </div> 
        </section>
        <nav className="navigation-wrapper" id="t">          
            <ul className="navigation">
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
                     
        </nav>
        {/*  <div className="flex-container row h-1">
          <div className="logo">
            <a href="/">
              <img className="logo-img" src={mainLogo} alt="samasti" />
            </a>  
          </div>
          <div className="h-11">
            <a href="/" className="">Donate</a> 
          </div>
         </div> 
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
        </nav> */} 
      </header>
    );
  }
}

